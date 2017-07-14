alias comx.textchan %:echo 15(09 $+ $iif(%::cmode,%::cmode,-) $+ 15)(00 $+ %::nick $+ 15) %::text
alias comx.metextchan var %m = %::me, %c = %::chan, %::memode = $iif(%m isop %c,@,$iif(%m isvo %c,+,-)) | %:echo 15(09 $+ $iif(%::memode,%::memode,-) $+ 15)(01 $+ %::me $+ 15) %::text
alias comx.whois {
  if (!%::wserver) { %:echo %::pre Cannot display /whois correctly with this theme engine! | return }
  var %p = %:echo $str($chr(160),20)
  %:echo %::pre 00/Whois:08 %::nick - ( $+ %::address $+ )
  if (%::wserver) %p 00Connected to:08 %::wserver ( $+ %::serverinfo $+ )
  if (%::away) %p 00Away:08 ( $+ %::away $+ )
  if (%::idletime) %p 00Idle:08 $duration(%::idletime) (Began: %::signontime $+ )
  if (%::isregd == is) %p 00Registered Nickname
  if (%::isoper == is) %p 00IrcOperator
  if (%::chan) {
    var %n = 1, %c.., %c.@, %c.+, %c.% | while ($gettok(%::chan,%n,32)) {
      var %c = $ifmatch, %s = $left(%c,1)
      inc %n
      if ($istok(. @ % +,%s,32)) %c. [ $+ [ %s ] ] = %c. [ $+ [ %s ] ] $mid(%c,2)
      else var %c.r = %c.r %c
    }
    if (%c..) %p 00Owns:08 %c..
    if (%c.@) %p 00Operates:08 %c.@
    if (%c.%) %p 00HalfOp:08 %c.%
    if (%c.+) %p 00Voiced:08 %c.+
    if (%c.r) %p $iif($numtok(%::chan,32) != $numtok(%c.r,32),00Other Channels:08) %c.r
  }
  %:echo %::pre 00/Done $iif(!%::pre,[Cannot display correctly using this engine!])
}