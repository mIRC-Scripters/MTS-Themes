alias start {
  %:echo $+(,%::c3) $+ |------------------------------ $+ $+(,%::c4) $+ Whois $+ ------------------------------|  
  %:echo %::pre $+ $+(,%::c4) Name: $+ $+(,%::c3) %::realname
  %:echo %::pre $+ $+(,%::c4) Address: $+ $+(,%::c3) %::address
}

alias signonidle { %:echo %::pre $+  $+ %::c4 Idle :  $+ %::c3 $duration(%::idletime) -  $+ %::c4 Signed On :  $+ %::c3 $+ %::signontime }
}
