#!/bin/bash

# Execute this script to download all necessary javascripts
JS=( "https://code.jquery.com/jquery-3.1.1.min.js" "http://momentjs.com/downloads/moment.js" )

#---------------------------------------------------#
# Leave this code alone. Seriously. Don't touch it. #
#---------------------------------------------------#

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd "$DIR"

echo "Downloading js files...."
for i in "${JS[@]}"; do
  curl -J -O -L -sS "$i"
done

echo "Done!"
