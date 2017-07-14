alias opiate {
  window @opiate 200 100 180 90
  aline @opiate Right click on the window
  aline @opiate To access the options
}
menu @opiate {
  action prefix
  .status
  ..on:{ set %sigma.opiate.act • }
  ..off:{ unset %sigma.opiate.act }
  .-
  .*:{ set %sigma.opiate.act * }
  .•:{ set %sigma.opiate.act • }
  .>:{ set %sigma.opiate.act > }
  .»:{ set %sigma.opiate.act » }
  .-
  .default:{ set %sigma.opiate.act • }
  nick brackets
  .your
  ..$chr(40) $+ $me $+ $chr(41):{ set %sigma.opiate.me.l ( | set %sigma.opiate.me.r ) }
  ..$chr(91) $+ $me $+ $chr(93):{ set %sigma.opiate.me.l $chr(91) | set %sigma.opiate.me.r $chr(93) }
  ..$chr(58) $+ $me $+ $chr(58):{ set %sigma.opiate.me.l $chr(58) | set %sigma.opiate.me.r $chr(58) }
  ..< $+ $me $+ >:{ set %sigma.opiate.me.l < | set %sigma.opiate.me.r > }
  ..‹ $+ $me $+ ›:{ set %sigma.opiate.me.l ‹ | set %sigma.opiate.me.r › }
  ..! $+ $me $+ !:{ set %sigma.opiate.me.l ! | set %sigma.opiate.me.r ! }
  ..| $+ $me $+ |:{ set %sigma.opiate.me.l $chr(124) | set %sigma.opiate.me.r $chr(124) }
  ..-
  ..default:{ set %sigma.opiate.me.l ‹ | set %sigma.opiate.me.r › }
  .users
  ..$chr(40) $+ $me $+ $chr(41):{ set %sigma.opiate.u.l ( | set %sigma.opiate.u.r ) }
  ..$chr(91) $+ $me $+ $chr(93):{ set %sigma.opiate.u.l $chr(91) | set %sigma.opiate.u.r $chr(93) }
  ..$chr(58) $+ $me $+ $chr(58):{ set %sigma.opiate.u.l $chr(58) | set %sigma.opiate.u.r $chr(58) }
  ..< $+ $me $+ >:{ set %sigma.opiate.u.l < | set %sigma.opiate.u.r > }
  ..‹ $+ $me $+ ›:{ set %sigma.opiate.u.l ‹ | set %sigma.opiate.u.r › }
  ..! $+ $me $+ !:{ set %sigma.opiate.u.l ! | set %sigma.opiate.u.r ! }
  ..| $+ $me $+ |:{ set %sigma.opiate.u.l $chr(124) | set %sigma.opiate.u.r $chr(124) }
  ..-
  ..default:{ set %sigma.opiate.u.l ‹ | set %sigma.opiate.u.r › }
  timestamp
  .status
  ..on:{ set %sigma.opiate.time ON }
  ..off:{ set %sigma.opiate.time OFF }
  .color scheme
  ..original (cold):{ unset %sigma.opiate.tsc* }
  ..phrosty (cold && green):{ set %sigma.opiate.tsc1 2 | set %sigma.opiate.tsc2 15 | set %sigma.opiate.tsc3 3 | set %sigma.opiate.tsc4 00 }
  ..djemi (lava && ashes):{ set %sigma.opiate.tsc1 4 | set %sigma.opiate.tsc2 07 | set %sigma.opiate.tsc3 14 | set %sigma.opiate.tsc4 07 }
  .brackets
  ..$chr(40) $+ 02 $+ $chr(58) $+ 45 $+ $chr(41):{ set %sigma.opiate.tl ( | set %sigma.opiate.tr ) }
  ..$chr(91) $+ 02 $+ $chr(58) $+ 45 $+ $chr(93):{ set %sigma.opiate.tl $chr(91) | set %sigma.opiate.tr $chr(93) }
  ..$chr(58) $+ 02 $+ $chr(58) $+ 45 $+ $chr(58):{ set %sigma.opiate.tl $chr(58) | set %sigma.opiate.tr $chr(58) }
  ..< $+ 02 $+ $chr(58) $+ 45 $+ >:{ set %sigma.opiate.tl < | set %sigma.opiate.tr > }
  ..‹ $+ 02 $+ $chr(58) $+ 45 $+ ›:{ set %sigma.opiate.tl ‹ | set %sigma.opiate.tr › }
  ..! $+ 02 $+ $chr(58) $+ 45 $+ !:{ set %sigma.opiate.tl ! | set %sigma.opiate.tr ! }
  ..| $+ 02 $+ $chr(58) $+ 45 $+ |:{ set %sigma.opiate.tl $chr(124) | set %sigma.opiate.tr $chr(124) }
  .type
  ..02 $+ $chr(58) $+ 45:{ set %sigma.opiate.k 1 }
  ..2 $+ $chr(58) $+ 45:{ set %sigma.opiate.k 2 }
  ..14 $+ $chr(58) $+ 45:{ set %sigma.opiate.k 3 }
  ..2 $+ $chr(58) $+ 45p:{ set %sigma.opiate.k 4 }
  ..2 $+ $chr(58) $+ 45pm:{ set %sigma.opiate.k 5 }
  ..2 $+ $chr(58) $+ 45P:{ set %sigma.opiate.k 6 }
  ..2 $+ $chr(58) $+ 45PM:{ set %sigma.opiate.k 7 }
  ..0245:{ set %sigma.opiate.k 8 }
  ..245:{ set %sigma.opiate.k 9 }
  ..1445:{ set %sigma.opiate.k 10 }
  ..245p:{ set %sigma.opiate.k 11 }
  ..245pm:{ set %sigma.opiate.k 12 }
  ..245P:{ set %sigma.opiate.k 13 }
  ..245PM:{ set %sigma.opiate.k 14 }
  .-
  .default:{ set %sigma.opiate.tl $chr(91) | set %sigma.opiate.tr $chr(93) | set %sigma.opiate.k 1 }
  -
  ALL DEFAULT:{ sigma.r }
}
alias sigma.opiate.time {
  if (%sigma.opiate.time == on) {
    if (%sigma.opiate.k == 1) { return  $+ $iif(%sigma.opiate.tsc1 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tl $+  $+ $iif(%sigma.opiate.tsc2 isnum 0-,$ifmatch,15) $+ $asctime(hh:nn) $+  $+ $iif(%sigma.opiate.tsc1 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tr }
    if (%sigma.opiate.k == 2) { return  $+ $iif(%sigma.opiate.tsc1 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tl $+  $+ $iif(%sigma.opiate.tsc2 isnum 0-,$ifmatch,15) $+ $asctime(h:nn) $+  $+ $iif(%sigma.opiate.tsc1 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tr }
    if (%sigma.opiate.k == 3) { return  $+ $iif(%sigma.opiate.tsc1 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tl $+  $+ $iif(%sigma.opiate.tsc2 isnum 0-,$ifmatch,15) $+ $asctime(HH:nn) $+  $+ $iif(%sigma.opiate.tsc1 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tr }
    if (%sigma.opiate.k == 4) { return  $+ $iif(%sigma.opiate.tsc1 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tl $+  $+ $iif(%sigma.opiate.tsc2 isnum 0-,$ifmatch,15) $+ $asctime(h:nnt) $+  $+ $iif(%sigma.opiate.tsc1 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tr }
    if (%sigma.opiate.k == 5) { return  $+ $iif(%sigma.opiate.tsc1 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tl $+  $+ $iif(%sigma.opiate.tsc2 isnum 0-,$ifmatch,15) $+ $asctime(h:nntt) $+  $+ $iif(%sigma.opiate.tsc1 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tr }
    if (%sigma.opiate.k == 6) { return  $+ $iif(%sigma.opiate.tsc1 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tl $+  $+ $iif(%sigma.opiate.tsc2 isnum 0-,$ifmatch,15) $+ $asctime(h:nnT) $+  $+ $iif(%sigma.opiate.tsc1 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tr }
    if (%sigma.opiate.k == 7) { return  $+ $iif(%sigma.opiate.tsc1 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tl $+  $+ $iif(%sigma.opiate.tsc2 isnum 0-,$ifmatch,15) $+ $asctime(h:nnTT)) $+  $+ $iif(%sigma.opiate.tsc1 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tr }
    if (%sigma.opiate.k == 8) { return  $+ $iif(%sigma.opiate.tsc1 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tl $+  $+ $iif(%sigma.opiate.tsc2 isnum 0-,$ifmatch,15) $+ $asctime(hhnn) $+  $+ $iif(%sigma.opiate.tsc1 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tr }
    if (%sigma.opiate.k == 9) { return  $+ $iif(%sigma.opiate.tsc1 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tl $+  $+ $iif(%sigma.opiate.tsc2 isnum 0-,$ifmatch,15) $+ $asctime(hnn) $+  $+ $iif(%sigma.opiate.tsc1 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tr }
    if (%sigma.opiate.k == 10) { return  $+ $iif(%sigma.opiate.tsc1 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tl $+  $+ $iif(%sigma.opiate.tsc2 isnum 0-,$ifmatch,15) $+ $asctime(HHnn) $+  $+ $iif(%sigma.opiate.tsc1 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tr }
    if (%sigma.opiate.k == 11) { return  $+ $iif(%sigma.opiate.tsc1 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tl $+  $+ $iif(%sigma.opiate.tsc2 isnum 0-,$ifmatch,15) $+ $asctime(hnnt) $+  $+ $iif(%sigma.opiate.tsc1 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tr }
    if (%sigma.opiate.k == 12) { return  $+ $iif(%sigma.opiate.tsc1 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tl $+  $+ $iif(%sigma.opiate.tsc2 isnum 0-,$ifmatch,15) $+ $asctime(hnntt) $+  $+ $iif(%sigma.opiate.tsc1 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tr }
    if (%sigma.opiate.k == 13) { return  $+ $iif(%sigma.opiate.tsc1 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tl $+  $+ $iif(%sigma.opiate.tsc2 isnum 0-,$ifmatch,15) $+ $asctime(hnnT) $+  $+ $iif(%sigma.opiate.tsc1 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tr }
    if (%sigma.opiate.k == 14) { return  $+ $iif(%sigma.opiate.tsc1 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tl $+  $+ $iif(%sigma.opiate.tsc2 isnum 0-,$ifmatch,15) $+ $asctime(hnnTT)) $+  $+ $iif(%sigma.opiate.tsc1 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tr }
  }
  else { return }
}

alias sigma.opiate.time_me {
  if (%sigma.opiate.time == on) {
    if (%sigma.opiate.k == 1) { return  $+ $iif(%sigma.opiate.tsc3 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tl $+  $+ $iif(%sigma.opiate.tsc4 isnum 0-,$ifmatch,15) $+ $asctime(hh:nn) $+  $+ $iif(%sigma.opiate.tsc3 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tr }
    if (%sigma.opiate.k == 2) { return  $+ $iif(%sigma.opiate.tsc3 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tl $+  $+ $iif(%sigma.opiate.tsc4 isnum 0-,$ifmatch,15) $+ $asctime(h:nn) $+  $+ $iif(%sigma.opiate.tsc3 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tr }
    if (%sigma.opiate.k == 3) { return  $+ $iif(%sigma.opiate.tsc3 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tl $+  $+ $iif(%sigma.opiate.tsc4 isnum 0-,$ifmatch,15) $+ $asctime(HH:nn) $+  $+ $iif(%sigma.opiate.tsc3 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tr }
    if (%sigma.opiate.k == 4) { return  $+ $iif(%sigma.opiate.tsc3 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tl $+  $+ $iif(%sigma.opiate.tsc4 isnum 0-,$ifmatch,15) $+ $asctime(h:nnt) $+  $+ $iif(%sigma.opiate.tsc3 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tr }
    if (%sigma.opiate.k == 5) { return  $+ $iif(%sigma.opiate.tsc3 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tl $+  $+ $iif(%sigma.opiate.tsc4 isnum 0-,$ifmatch,15) $+ $asctime(h:nntt) $+  $+ $iif(%sigma.opiate.tsc3 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tr }
    if (%sigma.opiate.k == 6) { return  $+ $iif(%sigma.opiate.tsc3 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tl $+  $+ $iif(%sigma.opiate.tsc4 isnum 0-,$ifmatch,15) $+ $asctime(h:nnT) $+  $+ $iif(%sigma.opiate.tsc3 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tr }
    if (%sigma.opiate.k == 7) { return  $+ $iif(%sigma.opiate.tsc3 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tl $+  $+ $iif(%sigma.opiate.tsc4 isnum 0-,$ifmatch,15) $+ $asctime(h:nnTT)) $+  $+ $iif(%sigma.opiate.tsc3 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tr }
    if (%sigma.opiate.k == 8) { return  $+ $iif(%sigma.opiate.tsc3 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tl $+  $+ $iif(%sigma.opiate.tsc4 isnum 0-,$ifmatch,15) $+ $asctime(hhnn) $+  $+ $iif(%sigma.opiate.tsc3 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tr }
    if (%sigma.opiate.k == 9) { return  $+ $iif(%sigma.opiate.tsc3 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tl $+  $+ $iif(%sigma.opiate.tsc4 isnum 0-,$ifmatch,15) $+ $asctime(hnn) $+  $+ $iif(%sigma.opiate.tsc3 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tr }
    if (%sigma.opiate.k == 10) { return  $+ $iif(%sigma.opiate.tsc3 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tl $+  $+ $iif(%sigma.opiate.tsc4 isnum 0-,$ifmatch,15) $+ $asctime(HHnn) $+  $+ $iif(%sigma.opiate.tsc3 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tr }
    if (%sigma.opiate.k == 11) { return  $+ $iif(%sigma.opiate.tsc3 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tl $+  $+ $iif(%sigma.opiate.tsc4 isnum 0-,$ifmatch,15) $+ $asctime(hnnt) $+  $+ $iif(%sigma.opiate.tsc3 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tr }
    if (%sigma.opiate.k == 12) { return  $+ $iif(%sigma.opiate.tsc3 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tl $+  $+ $iif(%sigma.opiate.tsc4 isnum 0-,$ifmatch,15) $+ $asctime(hnntt) $+  $+ $iif(%sigma.opiate.tsc3 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tr }
    if (%sigma.opiate.k == 13) { return  $+ $iif(%sigma.opiate.tsc3 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tl $+  $+ $iif(%sigma.opiate.tsc4 isnum 0-,$ifmatch,15) $+ $asctime(hnnT) $+  $+ $iif(%sigma.opiate.tsc3 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tr }
    if (%sigma.opiate.k == 14) { return  $+ $iif(%sigma.opiate.tsc3 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tl $+  $+ $iif(%sigma.opiate.tsc4 isnum 0-,$ifmatch,15) $+ $asctime(hnnTT)) $+  $+ $iif(%sigma.opiate.tsc3 isnum 0-,$ifmatch,2) $+ %sigma.opiate.tr }
  }
  else { return }
}

alias sigma.r {
  /set %sigma.opiate.act •
  /set %sigma.opiate.me.l ‹
  /set %sigma.opiate.me.r ›
  /set %sigma.opiate.u.l ‹
  /set %sigma.opiate.u.r ›
  /set %sigma.opiate.time ON
  /set %sigma.opiate.k 1
  /set %sigma.opiate.tl |
  /set %sigma.opiate.tr |
  /unset %sigma.opiate.tsc*
}

alias sigma.opiate.onload {
  .timestamp off
  %:echo 3 $+ %::pre $+ 15 $+ %::pre $+  Theme opiate by sulk (MTS Version by Djemi) loaded! [info:sulk @ irc.dal.net #airc][info2mts: djemi @ eu.undernet.org #aircpp] WARNING.: Type /opiate to set your own personnal setings
}
alias sigma.opiate.whois.start {
  ; 3( $+ %=whois.from2 $+ 3)
  %:echo 3___14___15__3______14__15__3_____14_____15___3____14_____15_____3___14__15__
  %:echo 3Host15:14 $replace(%::address,@,03@14,.,02.14,-,02-14)
  %:echo 3Name15:14 %::realname
}
