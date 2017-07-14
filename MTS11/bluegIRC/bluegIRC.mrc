alias g.whois {
  %:echo 2_ 3____[14Whois3\Start2]_________________________________3_2 12__ 14_ 15 __
  %:echo 2•3•2• Whois15:14  $+ $1 $+ 2/ $+ $2 [15 $+ $3- $+ 2]
}
alias e.whois {
  %:echo 2¯ 3¯¯¯¯[14Whois3\End..2]¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯3¯2 12¯¯ 14¯ 15 ¯¯
}
alias notify.on {
  %:echo 2Notify15:14 $1 $iif($2 != $null,2[15 $+ $2- $+ 2]) 2is online.  | haltdef
}
alias t.mode {
  %:echo 2Modes15:14 $1- | haltdef
}
alias ctcp.rep {
  if (LAGM !iswm $2) %:echo 6•7•6•  $+ $1 $+ 's  -12  $+ $2 $+  2reply: 7 $3- 
}
alias notify.off {
  %:echo 2Notify15:14 $1 $iif($2 != $null,2[15 $+ $2- $+ 2]) 2is offline. | haltdef
}
