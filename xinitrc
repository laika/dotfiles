#!/bin/sh

if [ -d /etc/X11/xinit/xinitrc.d ] ; then
 for f in /etc/X11/xinit/xinitrc.d/?*.sh ; do
  [ -x "$f" ] && . "$f"
 done
 unset f
fi

sxhkd -f 100 &
compton &
[[ -f ~/.Xresources ]] && xrdb -merge ~/.Xresources 
sh ~/documents/scripts/start.sh &
exec bspwm
#exec openbox-session
