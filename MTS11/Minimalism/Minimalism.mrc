alias minimwhois {
%:echo -
  %:echo %::nick $+ : $+ %minimcolordef %::address  $iif(not !isin %::isoper,IRCop)
  %:echo Name: $+ %minimcolordef %::realname
  %:echo Channels: $+ %minimcolordef %::chan
  %:echo Server: $+ %minimcolordef %::wserver  %::serverinfo
  if (%::idletime) %:echo Idle: $+ %minimcolordef %::idletime
  if (%::away) %:echo Away: $+ %minimcolordef %::away
  %:echo -
}
alias minimnames {
  %:echo %::chan names: $+ %minimcolordef $replace($iif($chr(35) isin $gettok(%::text,1,32),$gettok(%::text,2-,32),%::text),$chr(32), )
}
alias minimload {
  set %minimcolordef $1
  %:echo Minimalism Theme loaded: $+ $1 By S3S (P_ardillo@hotmail.com)
}
