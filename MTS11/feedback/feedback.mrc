alias ::whois.perform.feedback.0.99 {
  %:echo $::_c(3,- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -)
  %:echo %::pre $::_c(3,/Whois) $+ : %::nick $+ 
  %:echo 12Real Name: %::realname
  %:echo 12Address: %::address
  if (%::isregd == is) || (%::isoper) || (%::ishelper) %:echo 12Status: registered and identified nick $iif(%::isoper == is,[4IRCop]) $iif(%::ishelper == is,[4Helper])
  if (%::chan == $null) %:echo 12Channels: None | else %:echo 12Channels: %::chan
  %:echo 12Server: %::wserver - %::serverinfo
  if (%::away != $null) %:echo 12Away: $ifmatch
  if (%::idletime == $null) %:echo 12Idle: No info available. | else %:echo 12Idle: $::ident_duration.feedback.0.99(%::idletime) - 12Signon in $asctime(%::signontime)
  %:echo $::_c(3,- - - - - - - - - - - - - - - - - - - - -)
}
alias ::whowas.perform.feedback.0.99 {
  %:echo $::_c(3,- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -)
  %:echo %::pre $::_c(3,Whowas) $+ : %::nick 
  %:echo 12Address: %::address
  %:echo 12IRCname: %::realname
  %:echo 12Server: %::wserver
  %:echo $::_c(3,- - - - - - - - - - - - - - - - - - - - -)
}
alias ::userhost.perform.feedback.0.99 {
  if (%::value == +) var %v = is here. 
  elseif (%::value == -) var %v = is away. 
  elseif (%::value == $chr(42)) var %v = is an IRCop.
  %:echo %::pre  $+ $_c(2,Userhost) $+  $+ %::c1 $+ : %::nick ( $+ %::address $+ ) %v
}
alias ::ident_duration.feedback.0.99 { return $replace($duration($1),wks,w,days,d,hrs,h,mins,m,secs,s,wk,w,day,d,hr,h,min,m,sec,s) }
alias ::load.feedback.0.99 {
  linesep -s
  %:echo %::pre 14F e e 14d b a c 14K - v140.99
  %:echo $str($chr(160),4) 14Written by: 14Mal-14Functi
  %:echo $str($chr(160),4) 14Url: 14http://www.feedbackscript.cjb.net
  %:echo $str($chr(160),4) 14Email: 14mal-functi@irc-source.com
  %:echo $str($chr(160),4) 14Desc: default theme maded from 14FeedbacK
  %:echo %::pre 14E o 14f
}
alias ::unload.feedback.0.99 {
  linesep -s
  %:echo %::pre 14F e e 14d b a c 14K - v140.99. 14Unloading...
}
alias ::_c if ($2 != $null) && ($1 isnum 1-4) { var %col = %::c [ $+ [ $1 ] ] | return  $+ %col $+ $2- $+  }
