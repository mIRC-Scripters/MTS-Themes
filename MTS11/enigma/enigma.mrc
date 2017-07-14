alias enigma.w enigma.w2 | %:echo %::pre 13 $+ %::nick $+  0(11 $+ %::address $+ 0\15 $+ %::realname $+ 0)
alias enigma.c %:echo %::pre 13Channels0: 0(11 $+ $replace(%::chan,+,15+11,%,15%11,@,15@11) $+ 0)
alias enigma.a %:echo %::pre 13Away0: 0(11 $+ %::text $+ 0)
alias enigma.i %:echo %::pre 13Idle0: 0(11 $+ $enigma($duration(%::idletime)) $+ 0\15 $+ %::signontime $+ 0)
alias -l enigma return $replace($1-,days,d,hrs,h,mins,m,secs,s)
alias enigma.w2 %:echo 12—————11—————14——[00 $+ %::nick $+ 14]14—————11—————12——
alias enigma.login %:echo %::pre 13 $+ %::nick $+ 0: 0(15Logged in as 11 $+ $gettok(%::text,1,32) $+ 0)
