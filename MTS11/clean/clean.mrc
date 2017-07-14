alias clean.whois.start {
  .timestamp -f 
  %:echo  $+ %::c1 $+ .-—-—-whois( $+ %::c2 $+ %::nick $+  $+ %::c1 $+ )............ 
  %:echo  $+ %::c1 $+ $chr(124) address: %::address
  %:echo  $+ %::c1 $+ $chr(124) realname: %::realname
}
alias clean.names {
  if (%clean.names [ $+ [ %::chan ] ] == $null) { .timestamp -f  | set %clean.names [ $+ [ %::chan ] ] mjo | %:echo  $+ %::c1 $+ +——-(scan: $+ %::c2 $+ %::chan $+  $+ %::c1 $+ )-—-—— }
  set %users $gettok(%::text,2-,32)
  while ($numtok(%users,32) >= 6) { set %users2 $gettok(%users,1-6,32) | set %users $deltok(%users,1-6,32) | %:echo  $+ %::c1 $+ $chr(124) %users2 }
  if (%users != $null) { %:echo  $+ %::c1 $+ $chr(124) %users }
  unset %users %users2
}
alias clean.names.end {
  %:echo  $+ %::c1 $+ `-———( $+ %::c2 $+ end of scan-info $+  $+ %::c1 $+ )......
  unset %clean.names [ $+ [ %::chan ] ]
  .timestamp -f (HH:nn:ss)
}
