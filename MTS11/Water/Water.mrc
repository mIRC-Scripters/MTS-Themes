alias water.whois {
  %:echo 11•›››››››››››››››››10›››››››››››››11››››››››10›››11›› ›10›››11› ››10› ›› ›11› ›10› 11› 10 ›
  %:echo %::pre 11Whois report for %::nick ( $+ %::realname $+ 11)
  %:echo %::pre 11Address:11 $replace(%::address,@,00@11,.,00.11,~,00~11,-,00-11)
  if (quakenet isin $server) && (%::waterwhois.auth) %:echo %::pre 11Auth:11 $ifmatch
  if (%::operline) { %:echo %::pre 11Status:11 IRC Operator }
  if (%::chan) %:echo %::pre 11Channels:11 $replace(%::chan,$chr(35),$+(00,$chr(35),11))
  if (%::wserver) %:echo %::pre 11Server:11 %::wserver $+ 00,11 %::serverinfo
  if (%::away) %:echo %::pre 11Away:11 %::away
  if (%::idletime) { %:echo %::pre 11Idle:11 $duration(%::idletime) $+ 00,11 signed on $duration($calc($ctime - $ctime(%::signontime))) ago }
  %:echo 11•›››››››››››››››››10›››››››››››››11››››››››10›››11›› ›10›››11› ››10› ›› ›11› ›10› 11› 10 ›
  unset %::waterwhois.auth
}
alias water.whowas {
  %:echo 11•›››››››››››››››››10›››››››››››››11››››››››10›››11›› ›10›››11› ››10› ›› ›11› ›10› 11› 10 ›
  %:echo %::pre 11Whowas report for ( $+ %::nick $+ 11)
  %:echo %::pre 11Address:11 $replace(%::address,@,00@11,.,00.11,~,00~11,-,00-11)
  %:echo %::pre 11Name:11 %::realname
  if (%::wserver) %:echo %::pre 11Server:11 %::wserver
  if (%::serverinfo) %:echo %::pre 11Quit:11 $asctime($ctime(%::serverinfo),dddd00 $+ $chr(44) 11mmm dd yyyy00 $+ $chr(44) 11HH:nn:ss)
  %:echo 11•›››››››››››››››››10›››››››››››››11››››››››10›››11›› ›10›››11› ››10› ›› ›11› ›10› 11› 10 ›
}