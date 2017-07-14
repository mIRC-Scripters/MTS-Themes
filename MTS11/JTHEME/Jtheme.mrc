alias calmblue.textchan {
  var %c = $iif($gettok(5 5 3 7,$findtok(. @ % +,%::cmode,1,32),32),$ifmatch,14)
  %:echo $+( ,%c,%::nick,:)  %::text
}
alias calmblue.whois {
  if (!%::wserver) { %:echo %::pre Unable to display whois correctly on this theme engine | return }
  var %p = %:echo %::pre $+(5 %::nick) is
  %:echo %::pre %::nick is %::realname ( $+ %::address $+ ) 
  if (%::wserver) %p on server %::wserver ( $+ %::serverinfo $+ )
  if (%::away) %p away ( $+ %::away $+ )
  if (%::idletime) %p idle $duration(%::idletime) (Signed on: %::signontime $+ )
  if (%::isregd == is) %p a registered nickname
  if (%::isoper == is) %p an IRC operator
  if (%::chan) {
    var %n = 1, %c.., %c.@, %c.+, %c.% | while ($gettok(%::chan,%n,32)) {
      var %c = $ifmatch, %s = $left(%c,1)
      inc %n
      if ($istok(. @ % +,%s,32)) %c. [ $+ [ %s ] ] = %c. [ $+ [ %s ] ] $mid(%c,2)
      else var %c.r = %c.r %c
    }
    if (%c..) %p owner of %c..
    if (%c.@) %p operator in %c.@
    if (%c.%) %p halfop in %c.%
    if (%c.+) %p voiced in %c.+
    if (%c.r) %p $iif($numtok(%::chan,32) != $numtok(%c.r,32),also) in %c.r
  }
  %:echo %::pre End of whois $iif(!%::pre,[Not displayed correctly in this theme engine])
}