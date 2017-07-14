alias _wstart_ {
  set %nicky %::nick
  align
  %:echo  $+ %::c4 13_______________|15Whois %nicky $+ 13|________________________
  %:echo  $+ %::c4 13│15Addy13│15 %::address
  %:echo  $+ %::c4 13│15Name13│15 %::realname
}
alias _wend_ {
  %:echo  $+ %::c4 13_______________|15Whois %nicky $+ 13|________________________
  unset %nicky
  unset %z
}
alias dns.start {
  %:echo  $+ %::c4 ____________________|DNS|______________________
  .timer 1 0 echo $timestamp _____________________|DNS|_____________________
}
alias untitled.load {
  clear -a
  echo  -a CoreFusion By N|nj1
}
alias basic.st return $remove($duration($$1),ks,k,ays,ay,rs,r,ins,in,ecs,ec)
alias align {
  var %1 = $len(%nicky),%2 = 1 
  while (%2 <= %1) {
    set %z %z $+ - 
    inc %2
  } 
  set %zz $right(%z,-3)
}
