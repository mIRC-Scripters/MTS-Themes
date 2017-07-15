alias simple.whois {
  %:echo 15_______02Whois15_____________________________________ 14_ 10_ 02_
  %:echo 15* 10Whois: 02 $+ $1 $+ 10/02 $+ $2 10[02 $+ $3- $+ 10]
}
alias end.of.whois {
  %:echo 15¯¯¯¯¯¯¯02End of Whois15¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯ 14¯ 10¯ 02¯
}
alias notify.on {
  %:echo 15* 06Notify: $1 $iif($2 != $null,[15 $+ $2- $+ 06]) 06is online  | haltdef
}
alias notify.off {
  %:echo 15* 06Notify: $1 $iif($2 != $null,[15 $+ $2- $+ 06]) 06is offline  | haltdef
}
alias simple.modes {
  %:echo 15* 03Modes: $1- | haltdef
}
alias ctcp.rep {
  if (LAGM !iswm $2) %:echo 15* 02 $+ $1 $+ 's  $+ $2 $+  reply: $3- 
}
