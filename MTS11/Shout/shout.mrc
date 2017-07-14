alias shout.whois {
  %:echo 12•––––––––––––––––––––––   –––– –– – – –– – – –– –
  %:echo Whois: %::nick  ( $+ %::realname $+ )
  %:echo Address: $replace(%::address,@,@)
  if (quakenet isin $server) && (%::shoutwhois.auth) %:echo Auth: $ifmatch
  if (%::operline) { %:echo Status: IRC Operator }
  %:echo Channels: $iif(!%::chan, Nothing, $replace(%::chan, @, @, +, +))
  %:echo Server: %::wserver
  if (%::idletime) { %:echo Idletime: $duration(%::idletime) $+ , signed on $duration($calc($ctime - $ctime(%::signontime))) ago }
  %:echo 12•––––––––––––––––––––––   –––– –– – – –– – – –– –
  unset %::shoutwhois.auth
}
alias shout.whowas {
  %:echo 12•––––––––––––––––––––––   –––– –– – – –– – – –– –
  %:echo Whowas: ( $+ %::nick $+ )
  %:echo Address: $replace(%::address,@,@,.,.,~,~,-,-)
  %:echo Name: %::realname
  if (%::wserver) %:echo Server: %::wserver
  if (%::serverinfo) %:echo Quit: $asctime($ctime(%::serverinfo),dddd $+ $chr(44) mmm dd yyyy $+ $chr(44) 12HH:nn:ss)
  %:echo 12•––––––––––––––––––––––   –––– –– – – –– – – –– –
}

