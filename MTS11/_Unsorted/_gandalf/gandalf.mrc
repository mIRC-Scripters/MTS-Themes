alias simple.whois {
  %:echo 15›14›10› 15...14...02.... 10Whois $1 02.........14..........15.............
  %:echo 15›14›10› 15...14...02.... 10 $+ $3-
}
alias end.of.whois {
  %:echo 15›14›10› 15...14...02.... 10End of Whois $1 02........14..........15............
}
alias notify.on {
  %:echo 15›14›10› Notify: $1 $iif($2 != $null,15 $+ $2- $+ 10) is online | haltdef
}
alias notify.off {
  %:echo 15›14›10› Notify: $1 $iif($2 != $null,15 $+ $2- $+ 10) is offline | haltdef
}
alias simple.modes {
  %:echo 15›14›10› 15Modes: $1- | haltdef
}
alias ctcp.rep {
  if (LAGM !iswm $2) %:echo 15›14›10›  $+ $1 $+  $2 reply: $3- 
}
