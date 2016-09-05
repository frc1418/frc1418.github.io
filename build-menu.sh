#!/bin/bash

export RED='\033[0;31m'
export GREEN='\033[0;32m'
export YELLOW='\033[1;33m'
export CYAN='\033[0;36m'
export BCYAN='\033[1;36m'
export PURPLE='\033[0;35m'
export GRAY='\033[0;37m'
export MAGENTA='\033[0;37m'
export NC='\033[0m'

currentTasks=0;

function calc_task_indent(){
    task_indent=$(perl -e "print '  ' x ${currentTasks};")
}

function log(){
    case $2 in
	"warning")
	    printf "${task_indent}${YELLOW}[!]${NC} $1 \n"
	    ;;
	"error")
	    printf "${task_indent}${RED}[!]${NC} $1 \n"
	    ;;
	"task")
	    printf "${task_indent}${CYAN}[+]${NC} $1 \n"
	    currentTasks=$(($currentTasks+1))
	    calc_task_indent
	    ;;
	"endtask")
	    currentTasks=$(($currentTasks-1))
	    calc_task_indent
	    printf "${task_indent}${CYAN}[-]${NC} $1 \n"
	    ;;
	*)
	    printf "${task_indent}${GREEN}[*]${NC} $1 \n"
	    ;;
    esac
}

export -f log

###Checks
log "Begining check." "task"

#pages
if [ ! -d "pages" ]; then
    log "Unable to locate pages directory. Exiting." "error"
    exit 1
fi
log "Verified existence of pages dir"

#data
if [ ! -d "_data" ]; then
    log "Unable to locate _data directory. Exiting." "error"
    exit 1
fi
log "Verified existence of _data dir"

log "Checks ened. \n" "endtask"

###Wiping existing menu file
if [ -f "_data/menu.yml" ]; then
    log "Wiping current menu file\n"
    rm _data/menu.yml
fi
touch _data/menu.yml

function load_valid_page(){
    local file=$1
	    
    if [ -d "$file" ]; then
	if [ -f "$file/info.yml" ]; then
	    file="$file/info.yml"
	else
	    if [ "$2" != "silent" ]; then
		log "Directory: ${PURPLE}$file${NC} does not contain a info.yml. Directory will be ignored." "warning"
	    fi

	    return 1;
	fi
    fi
    
    local coloredFile="${PURPLE}$file${NC}"

    current=1
    last=$(wc -l < $file)
    commentFound=""
    while [ "$current" -le "$last" ]; do
	local text=$(sed -n ${current}p $file)
	local text=$(echo ${text// /})

	
	if [ "$text" == "{%comment%}" ]; then
	    commentFound="yes"
	    break;
	fi

	current=$(($current+1))
    done

    if [ "$commentFound" != "yes" ]; then
	if [ "$2" != "silent" ]; then
	    log "File: $coloredFile does not contain comment. File will be ignored." "warning"
	fi
	return 1;
    fi

    weight="NOT_SET"
    title="NOT_SET"
    url="NOT_SET"
    
    local line=$current
    while true; do
	local text=$(sed -n ${line}p "$file")
	local text=$(echo ${text// /})

	if [[ "$text" == *"weight:"* ]]; then
	    weight=${text##*:}
	fi
	
	if [[ "$text" == *"title:"* ]]; then
	    local text=$(sed -n ${line}p "$file")
	    title=${text##*:}
	fi

	if [[ "$text" == *"url:"* ]]; then
	    url=${text##*:}
	fi

	if [ "$text" == "{%endcomment%}" ]; then
	    break;
	fi

	local line=$(($line+1))
    done

    if [ "$weight" == "NOT_SET" ]; then
	if [ "$2" != "silent" ]; then
	    log "Unable to find weight variable in $coloredFile. File will be ignored." "warning"
	fi
	return 1;
    fi
    
    if [ "$title" == "NOT_SET" ]; then
	if [ "$2" != "silent" ]; then
	    log "Unable to find title variable in $coloredFile. File will be ignored." "warning"
	fi
	return 1;
    fi
    
    if ! [[ $weight =~ ^-?[0-9]+$ ]]; then
       if [ "$2" != "silent" ]; then
	   log "Weight varable in $coloredFile is not a valid integer. File will be ignored." "warning"
       fi
       return 1;
    fi
}


function build_menu(){
    if [ $# -eq 0 ]; then
	local iter=0
	local dir="pages/"

	echo "- title: Home" >> _data/menu.yml
	echo "  weight: 0" >> _data/menu.yml
	echo "  url: /" >> _data/menu.yml
    else
	local iter=$1
	local dir=$2
    fi
    
    local space=$(perl -e "print '  ' x ${iter};")

    local coloredDir="${PURPLE}$dir${NC}"

    local skippedFiles="";

    log "Starting index of $coloredDir" "task"

    log "Checking for data" "task"
    #Warning about non commented files
    for file in $dir*; do
	#Catching invalid files
	if [[ "$file" == *"info.yml"* ]]; then
	    continue;
	fi
	if [[ "$file" == *"~" ]]; then
	    continue;
	fi
	
	load_valid_page $file
    done
    log "Finished check for data" "endtask"

    log "Starting ordering of files in $coloredDir" "task"
    for i in $(seq 0 10); do
	log "Searching for pages with weight $i in $coloredDir"
       
	for file in $dir*; do
	    #Catching invalid files
	    if [[ "$file" == *"info.yml"* ]]; then
		continue;
	    fi
	    if [[ "$file" == *"~" ]]; then
		continue;
	    fi
	    
	    #Geting data from file
	    load_valid_page $file "silent"

	    #Checks for error in response
	    r=$?
	    if [ "$r" == "1" ]; then
		continue;
	    fi
	    #log "Weight: $weight"

	    if [ "$weight" == "$i" ]; then
		local coloredFile="${PURPLE}$file${NC}"

		if [ "$url" == "NOT_SET" ]; then
		    url=$file
		fi
		
		log "Found $coloredFile in $coloredDir"
		echo "${space}- title:$title" >> _data/menu.yml
		echo "${space}  url: /$url" >> _data/menu.yml
		if [ -d $file ]; then
		    log "$coloredFile is a directory."
		    echo "${space}  subitems:" >> _data/menu.yml
		    build_menu $(($iter+1)) "$file/"
		fi
		
	    fi
	done
    done
    log "Finished ordering of files in $coloredDir" "endtask"

    log "Finished index of $coloredDir" "endtask"
}

log "Building menu..." "task"
build_menu
log "Menu file build" "endtask"
