#!/bin/sh
#
# z3bra - (c) wtfpl 2014
# Fetch infos on your computer, and print them to stdout every second.
 
clock() {
    date '+%Y-%m-%d %I:%M'
}
 
battery() {
    BATC=/sys/class/power_supply/BAT1/capacity
    BATS=/sys/class/power_supply/BAT1/status
 
    test "`cat $BATS`" = "Charging" && echo -n '+' || echo -n '-'
 
    sed -n p $BATC
}
network() {
    read lo int1 int2 <<< `ip link | sed -n 's/^[0-9]: \(.*\):.*$/\1/p'`
    if iwconfig $int1 >/dev/null 2>&1; then
        wifi=$int1
        eth0=$int2
    else
        wifi=$int2
        eth0=$int1
    fi
    ip link show $eth0 | grep 'state UP' >/dev/null && int=$eth0 ||int=$wifi
 
    #int=eth0
 
    ping -c 1 8.8.8.8 >/dev/null 2>&1 &&
        echo "$int connected" || echo "$int disconnected"
}
 
groups() {  
    cur=`xprop -root _NET_CURRENT_DESKTOP | awk '{print $3}'`
    tot=`xprop -root _NET_NUMBER_OF_DESKTOPS | awk '{print $3}'`
 
    for w in `seq 0 $((cur - 1))`; do line="${line}◯"; done
    line="${line}●"
    for w in `seq $((cur + 2)) $tot`; do line="${line}◯"; done
    echo $line
}

battery() {
        BATPERC=$(acpi --battery | cut -d, -f2)
        echo "$BATPERC"
}
 
# This loop will fill a buffer with our infos, and output it to stdout.
while :; do
    buf=""
    buf="${buf} %{l}$(clock)"
    buf="${buf} %{c}$(groups)"
    buf="${buf} %{r}$(network), $(battery)"
 
    echo $buf
    # use `nowplaying scroll` to get a scrolling output!
    sleep .25 # The HUD will be updated every second
done