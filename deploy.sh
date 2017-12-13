#!/bin/sh

# 
SYNC_DIR='dist/'

if [ ! -d $SYNC_DIR ]; then
	ng build -prod
fi

# SITE
SITE_DIR='/var/www/html/'
if [ -d $SITE_DIR ]; then
	rsync -av --delete $SYNC_DIR $SITE_DIR
	mv $SITE_DIR/index.html $SITE_DIR/expedition 
fi

