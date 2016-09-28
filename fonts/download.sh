#!/bin/bash

# Execute this script to download fonts from google fonts.
# Add any font from https://fonts.google.com/?category=Monospace you'd like to use. (Replace spaces with '%20'. Monospace fonts are recommended.)

#FONTS=( "Source%20Code%20Pro" "Roboto%20Mono" "Droid%20Sans%20Mono" )
FONTS=( "Roboto%20Mono" )

#---------------------------------------------------#
# Leave this code alone. Seriously. Don't touch it. #
#---------------------------------------------------#

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
TEMPDIR="$DIR/temp"

cd "$DIR"
mkdir -p "$TEMPDIR"
cd "temp"

echo "Downloading fonts...."
for i in "${FONTS[@]}"; do
  curl -J -O -L -sS "https://fonts.google.com/download?family=$i"
done

echo "Extracting fonts..."
unzip -o -qqq "./*.zip"
cd "$DIR"
find "$TEMPDIR" -name "*.ttf" -type f -exec mv {} "$DIR/"  \;
rm -rf "$TEMPDIR"

echo "Done!"
