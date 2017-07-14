alias cyclopse.whois {
  %:echo 9•››››››››››››››››››››››››››››››››› ››››› ››› ›› ›› ›› › ›
  %:echo %::pre $+(0,%::nick, 15is ",%::realname,15")
  %:echo 9•1››  $+ %::nick $+  15is $replace(%::address,~,9~,@,9@,.,9.,-,9-)
  if (%thm.ownip) { %:echo 9•1››  $+ %::nick $+  15real host $replace($gettok($ifmatch,1,32),~,9~,@,9@,.,9.,-,9-) $+ 15, $replace($gettok($ifmatch,2,32),.,9.) }
  if ($q.net) && (%thm.auth) { %:echo 9•1››  $+ %::nick $+  15is authed as 15" $+ $ifmatch $+ 15" }
  if (%::operline) { %:echo 9•1››  $+ %::nick $+  15is an IRC Operator }
  if (%::chan) { %:echo 9•1››  $+ %::nick $+  15on $replace(%::chan,.,9.,@,9@,%,9%,+,9+,$chr(35),14 $+ $chr(35) $+ ) }
  if (%::wserver) { %:echo 9•1››  $+ %::nick $+  15using $replace(%::wserver,.,9.,-,9-) $+ 15, %::serverinfo }
  if (%::away) { %:echo 9•1››  $+ %::nick $+  15is away15: %::away }
  if (%::idletime) { %:echo 9•1››  $+ %::nick $+  15has been idle for9 $duration(%::idletime) $+ , 15signed on9 $duration($calc($ctime - $ctime(%::signontime))) ago }
  %:echo 9•››››››››››››››››››››››››››››››››› ››››› ››› ›› ›› ›› › ›
  unset %thm.auth %thm.ownip
}
alias cyclopse.whowas {
  %:echo 9•››››››››››››››››››››››››››››››››› ››››› ››› ›› ›› ›› › ›
  %:echo %::pre 0 $+ %::nick $+  15was " $+ %::realname $+ 15"
  %:echo 9•1››  $+ %::nick $+  15was $replace(%::address,@,9@,.,9.,-,9-)
  if (%::wserver) { %:echo 9•1››  $+ %::nick $+  15using $replace(%::wserver,.,9.,-,9-) }
  if (%::serverinfo) { %:echo 9•1››  $+ %::nick $+  15quit $asctime($ctime(%::serverinfo),dddd $+ $chr(44) mmm dd yyyy $+ $chr(44) HH:nn:ss) }
  %:echo 9•››››››››››››››››››››››››››››››››› ››››› ››› ›› ›› ›› › ›
}
alias nn.tsd { return $+(9[,$1-,9]15) }
alias nn.tgt { return $+(00,$left($1,1),15,$right($1-,-1),15) }
alias nn.tgtd { return $+(00,$left($1,1),15,$right($1-,-1),00:15) }
alias nn.linesep { return 9•››››››››››››››››››››››››››››››››› ››››› ››› ›› ›› ›› › › }
