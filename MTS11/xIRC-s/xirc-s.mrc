alias default.load {
  set %xirc-s.scheme $1
  %:echo theme loaded: xIRC-s (scheme/ $+ %xirc-s.scheme $+ )
}
alias default.whoisinit {
  %:echo 12/0whois16 $1
  %:echo 0name 14(16 $+ $3  $+ 14)
  %:echo 0address 14(16 $+ $2 $+ 14)
}
alias default.whoisidle {
  %:echo 0idle 14(16 $+ $duration($1) $+ 14)
  %:echo 0sign on 14(16 $+ $2- $+ 14)
}
alias default.whoisend { %:echo 0end of 12/0whois }
alias default.lusersinit { %:echo 0lusers 14(16 $+ $1 $+ 14)0 user(s) on12 $2 0server(s) }
alias default.lusersend { %:echo 0lusers 14(16 $+ $1 $+ 14)0 user(s) on12 $3 0server(s) }
alias default.topicinit { %:echo 0·· topic 14(16 $+ $iif($1-,$1-,no topic) $+ 14) }
alias default.topic.change {
  %:echo 0·· topic 14(16 $+ $iif($2-,$2-,no topic) $+ 14)
  %:echo 0·· set by 14(16 $+ $1 $+ 14)
}
alias default.mode {
  %:echo 0·· modes 14(16 $+ $iif($len($1) <= 1,no modes set,$1-)  $+ 14)
}
alias default.users {
  set -un %:echo echo $1
  %:echo 0·· users 13[0ops 14(16 $+ $nick($1,0,o,rvh) $+ 14) 0voiced 14(16 $+ $nick($1,0,v,roh) $+ 14)0 regular 14(16 $+ $nick($1,0,r,ovh) $+ 14)0 total 14(16 $+ $nick($1,0) $+ 14)13]
  %:echo 0·· synched in 14(16 $+ $round($calc(($ticks - %join. [ $+ [ $1 ] ] ) / 1000),3) $+ s14)
  unset %join. [ $+ [ $1 ] ]
}
alias default.adminend {
  %:echo 14(16 $+ $1- $+ 14)
  %:echo 0end of /admin
}
alias default.join {
  set %join. $+ [ [ $1 ] ] $ticks
  %:echo 0›› now talkin' in 14(16 $+ $1 $+ 14)
}
