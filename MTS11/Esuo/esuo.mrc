﻿alias g.whois {
  %:echo 11——————————————————— 12(11 User $1 12) 11———————————————————
  %:echo 
  %:echo 12Features For13: 12(11 $+ $1 $+ 12)
  %:echo 12Host13: 12(11 $+ $2 $+ 12)
  %:echo 12Real Name13: 12(11 $+ $3- $+ 12)
}
alias e.whois {
  %:echo 
  %:echo 11——————————————————— 12(11 End of List 12) 11———————————————————
}
alias t.mode {
  %:echo 12Modes13: 12(11 $+ $1- $+ 12) | haltdef
}
alias ctcp.rep {
  if (LAGM !iswm $2) %:echo 7•••12's 13- 12reply13: $3-
}
