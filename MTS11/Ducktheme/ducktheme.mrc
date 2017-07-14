alias ducktheme.whois {
  %:echo %::pre 7Whois: 4(08 $+ %::nick $+ 4)
  %:echo %::pre 4(08 $+ %::nick $+ 4)9 is 4(7Address:08 %::address $+ 4) (07Real Name:08 %::realname $+ 4)
}

alias ducktheme.whowas {
  %:echo %::pre 7Whowas: 4(08 $+ %::nick $+ 4)
  %:echo %::pre 4(08 $+ %::nick $+ 4)9 is 4(7Address:08 %::address $+ 4) (07Real Name:08 %::realname $+ 4)
}

alias ducktheme.idle {
  %:echo %::pre 4(08 $+ %::nick $+ 4)9 Has been idle for $replace($duration( $+ %::idletime $+ ),wks,w,wk,w,days,d,day,d,h,hrs,hr,h,mins,m,min,m,secs,s,sec,s) 4(7Signed On:08 %::signontime $+ 4)
}

alias ducktheme.authed { 
  %:echo %::pre %::nick is authed as %::isregd
}
