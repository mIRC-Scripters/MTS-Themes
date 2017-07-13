alias start {
  %:echo $+  $+ %::c4         ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯ $+ %::c3 $+ Whois  $+ %::c4 $+ _______________________
  %:echo %::pre $+  $+ %::c4 %::nick - [ $+ %::c2 %::address  $+ %::c4 $+ $chr(93) 
  %:echo %::pre $+  $+ %::c4 Realname :   $+ %::c3 $+ %::realname
}
alias signonidle { %:echo %::pre $+  $+ %::c4 Idle :  $+ %::c3 $duration(%::idletime) -  $+ %::c4 Signed On :  $+ %::c3 $+ %::signontime }
