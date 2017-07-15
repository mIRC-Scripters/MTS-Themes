alias thrift.dnserror { return %::pre dns error! }
alias thrift.dnsresolve { echo -a %::pre 10dns of9 %::nick 10resolved to9 %::raddress }
alias thrift.dns {
  %:echo 9ip address $+ : $iif(%::iaddress,%::iaddress,Unknown)
  %:echo 9name address $+ : $iif(%::naddress,%::naddress,Unknown)
  %:echo 9:resolved address $+ : $iif(%::raddress,%::raddress,Unknown)
}
alias thrift.lusersinit {
  %:echo %::pre 10listing users %::pre
  %:echo 10connected to:9 $iif(%::network,%::network,%::server)
  %:echo 10total users on irc:9 $1
  %:echo 10hidden users on irc:9 $2 
}
alias thrift.whoisserver {
  %:echo 10server:9 $1
}
alias thrift.joinself {
  %:echo %::pre 10joined9 %::chan 10 $+ %::pre
}
alias thrift.lusersend {
  %:echo 10total users on irc:9 $+ $1
  %:echo 10total servers on irc:9 $+ $2
}
alias thrift.whoisinit {
  %:echo 
  %:echo %::pre whois of9 $1 %::pre
  %:echo 9 $+ $112 is9 $2
  %:echo 10ircname $+ :9 $3-
}
alias thrift.whoischans { %:echo 10channels:9 $1- }
alias thrift.whoisidle { %:echo 10idle:9 $duration($1) | %:echo 10signon:9 $2- }
alias thrift.whoisaway { %:echo 10away:9 %::text }
alias thrift.endofwhois { %:echo 10·9::10· 10end of9 $2 10whois 10·9::10·  | %:echo  }
alias thrift.names {
  if (%k.names [ $+ [ %::chan ] ] == $null) { set %k.names [ $+ [ %::chan ] ] mjo | %:echo %::pre  $+ %::c1 $+ -——-(names: $+ %::c2 $+ %::chan $+  $+ %::c1 $+ )-—-—— }
  set %users $gettok(%::text,2-,32)
  while ($numtok(%users,32) >= 6) { set %users2 $gettok(%users,1-6,32) | set %users $deltok(%users,1-6,32) | %:echo  $+ %::c1 $+ -     %users2 }
  if (%users != $null) { %:echo  $+ %::c1 $+ -     %users }
  unset %users %users2
}
alias thrift.endofnames {
  %:echo %::pre  $+ %::c1 $+ -——-( $+ %::c2 $+ end of names $+  $+ %::c1 $+ )-—-——
  %:echo 
  unset %k.names [ $+ [ %::chan ] ]
}
