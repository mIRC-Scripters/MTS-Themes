alias _m2kWHO {
  %:echo Whois to:2 %::nick  ( $+ %::realname $+ )
  %:echo Address:2 $replace(%::address,@,@)
  %:echo Channels: 2 $iif(!%::chan, Nothing, $replace(%::chan, @, 4@2, +, 2+2))
  %:echo Server:2 %::wserver
  %:echo -
} 