alias 8load {
  %:echo %::pre 11eIGHT theme loaded 12[11http://fragma.r8.org12]
}

alias 8unload {
  %:echo %::pre 11eIGHT theme unloaded 12[11http://fragma.r8.org12]
}

alias 8joins {
  %:echo  $+ %::c3 $+ —————————————————————————————————————————————
  %:echo %::pre 11Joined %::chan $+ 
}

alias 8topic {
  %:echo %::pre  $+ %::c1 $+ Topic:
  %:echo 11" $+ %::text $+ " 
}

alias 8topic2 {
  %:echo %::pre 11Topic written by %::nick on11 %::text 
  %:echo  $+ %::c3 $+ ———————————————————————————————————————————————————————————
}

alias 8chan {
  %:echo 12 $+ [0 $+ %::cmode $+ 0 %::nick 12 $+ ]0 %::text
}

alias 8chanme {
  %:echo 12 $+ [0 $+ %::cmode $+ 0 $strip(%::me,c) 12 $+ ]0 %::text
}

alias 8whois {
  %:echo  $+ %::c3 $+ —————————————————————————————————————————————
  %:echo %::pre 11 /Whois for %::nick [ $+ %::address $+ ]
  %:echo %::pre 
  %:echo %::pre 11 Realname: %::realname
}

alias 8whois1 {
  %:echo %::pre 11 Status: %::nick is $iif(%::isregd != is,not) a registered nick.
}

alias 8whois2 {
  %:echo %::pre 11 End of /Whois
  %:echo  $+ %::c3 $+ ———————————————————————————————————————————————————————————
}

alias 8servt {
  %:echo  $+ %::c3 $+ —————————————————————————————————————————————
  %:echo %::pre 11 Users online: %::users [invisible: %::value $+ ]
}

alias 8servd {
  %:echo %::pre 11 Global users: %::users [max: %::value $+ ]
  %:echo  $+ %::c3 $+ ———————————————————————————————————————————————————————————
}

alias 8whowas {
  %:echo  $+ %::c3 $+ —————————————————————————————————————————————
  %:echo %::pre 11 /Whowas
  %:echo
  %:echo %::pre 11  $+ %::nick $+ [ $+ %::adress $+ ] is %::realname 
}

alias 8whowas2 {
  %:echo %::pre 11 End of /Whowas to %::nick
  %:echo  $+ %::c3 $+ ———————————————————————————————————————————————————————————
}
