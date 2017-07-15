alias default.load {
  set %xirc-s.scheme $1
  %:echo theme loaded: 00xanthic theme13: v001.0 by syphonx
}
alias default.whoisinit {
  %:echo 13../00Whois13:00 $1
  %:echo 13..0Name 13(16 $+ $3  $+ 13)
  %:echo 13..0Address 13(16 $+ $2  $+ 13)
}
alias default.whoisidle {
  %:echo 13..0Idle 13(16 $+ $duration($1)  $+ 13)
  %:echo 13..0Sign on 13(16 $+ $3  $+ 13)
}
alias default.whoisend { %:echo 13../00Whois13:00 end }
alias default.lusersinit { %:echo 0Lusers 12(00 $+ $1 $+ 13)00 user(s) on08 $2 0server(s) }
alias default.lusersend { %:echo 0Lusers 12(00 $+ $1 $+ 13)00 user(s) on08 $3 0server(s) }
alias default.topicinit { %:echo 13››00 Topic 13(16 $+ $iif($1-,$1-,no topic) $+ 13) }
alias default.topic.change {
  %:echo 13››00 Topic 13(16 $+ $iif($2-,$2-,no topic) $+ 13)
  %:echo 13›› 00Set by 13(00 $+ $1 $+ 13)
}
alias default.mode {
  %:echo 13››00 Modes 13(00 $+ $iif($len($1) <= 1,no modes set,$1-) $+ 13)
}
alias default.users {
  set -un %:echo echo $1
  %:echo 13››00 Users 08[0ops 13(00 $+ $nick($1,0,o,rvh) $+ 13) 0voiced 13(00 $+ $nick($1,0,v,roh) $+ 13)0 regular 13(00 $+ $nick($1,0,r,ovh) $+ 13)0 total 13(00 $+ $nick($1,0) $+ 13)08]
  %:echo 13››00 Synched in 13(00 $+ $round($calc(($ticks - %join. [ $+ [ $1 ] ] ) / 1000),3) $+ s13)
  unset %join. [ $+ [ $1 ] ]
}
alias default.adminend {
  %:echo 13(00 $+ $1- $+ 13)
  %:echo 0end of 13/0admin
}
alias default.join {
  set %join. $+ [ [ $1 ] ] $ticks
  %:echo 13››00 Now talking in 13(00 $+ $1 $+ 13)
}
