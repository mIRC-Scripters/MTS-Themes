;\\<
;\\ girc theme for MTS
;\\>
alias g.whois {
  %:echo 15‹2— [10 User: $1 2] —————————————————————————————
  %:echo 
  %:echo        15Features For: $1 
  %:echo        15Host: [ $2 ]
  %:echo        15Real Name: [ $3- ]
}
alias e.whois {
  %:echo 
  %:echo 2—————————————————————————————————————————15›
}
alias t.mode {
  %:echo   2Modes15:14 $1- | haltdef
}
alias ctcp.rep {
  if (LAGM !iswm $2) %:echo 6•7•6•  $+ $1 $+ 's  -12  $+ $2 $+  2reply: 7 $3- 
}

;\\<
;\\ gerk 2
;\\>

alias g.whois2 {
  %:echo 15<2ÄÄ [7 User: $1 2] ÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
  %:echo 
  %:echo        15Features For: $1 
  %:echo        15Host: [ $2 ]
  %:echo        15Real Name: [ $3- ]
}
alias e.whois2 {
  %:echo 
  %:echo 2ÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ15>
}
