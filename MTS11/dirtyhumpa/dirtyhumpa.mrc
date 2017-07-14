alias dirtyhumpa.load %:echo %::pre $chr(3) $+ %::c3 $+ dirtyhumpa $chr(3) $+ %::c2 $+ theme $+ $chr(3) $+ %::c3 by dirtySanchez  $+ $chr(3) $+ %::c1 $+ ( $+ $chr(3) $+ %::c3 $+ dirtySanchez9999@gmail.com $+ $chr(3) $+ %::c1 $+ ) $+ $chr(3) $+ %::c3 has just been loaded.
alias dirtyhumpa.whois {
  %:echo $chr(3) $+ %::c3 $+ - $+ $chr(3) $+ %::c2 $+ - $+ $chr(3) $+ %::c1 $+ > / $+ $chr(3) $+ %::c2 $+ W $+ $chr(3) $+ %::c3 $+ hois $chr(3) $+ %::c1 $+ : $+ $chr(3) $+ %::c3 %::nick $chr(3) $+ %::c1 $+ $str($chr(150),25)
  %:echo $str($chr(160),5) $chr(3) $+ %::c3 $+ - $+ $chr(3) $+ %::c2 $+ - $+ $chr(3) $+ %::c1 $+ > Name $+ $chr(3) $+ %::c2 $+ : $+ $chr(3) $+ %::c3 %::realname $chr(3) $+ %::c2 $+ ( $+ $chr(3) $+ %::c3 $+ $iif(%::hostip,$gettok(%::hostip,1,32) $chr(3) $+ %::c2 $+ $chr(150) $+ $chr(3) $+ %::c1 $+ > $+ $chr(3) $+ %::c3 $gettok(%::hostip,2,32),%::address) $+ $chr(3) $+ %::c2 $+ )
  var %x = 1
  while ($gettok(%::chan,%x,32)) {
    var %chan.pre = $left($ifmatch,1)
    if (%chan.pre == @) var %chan.o = $addtok(%chan.o,$iif($istok($dh_comchan(%::nick),$right($gettok(%::chan,%x,32),-1),32),$+(,$right($gettok(%::chan,%x,32),-1),),$right($gettok(%::chan,%x,32),-1)),32)
    elseif (%chan.pre == %) var %chan.h = $addtok(%chan.h,$iif($istok($dh_comchan(%::nick),$right($gettok(%::chan,%x,32),-1),32),$+(,$right($gettok(%::chan,%x,32),-1),),$right($gettok(%::chan,%x,32),-1)),32)
    elseif (%chan.pre == +) var %chan.v = $addtok(%chan.v,$iif($istok($dh_comchan(%::nick),$right($gettok(%::chan,%x,32),-1),32),$+(,$right($gettok(%::chan,%x,32),-1),),$right($gettok(%::chan,%x,32),-1)),32)
    elseif (%chan.pre == $chr(35)) var %chan.r = $addtok(%chan.r,$iif($istok($dh_comchan(%::nick),$gettok(%::chan,%x,32),32),$+(,$gettok(%::chan,%x,32),),$gettok(%::chan,%x,32)),32)
    inc %x
  }
  if (%chan.o) %:echo $str($chr(160),5) $chr(3) $+ %::c3 $+ - $+ $chr(3) $+ %::c2 $+ - $+ $chr(3) $+ %::c1 $+ > Opped in $+ $chr(3) $+ %::c2 $+ : $+ $chr(3) $+ %::c3 %chan.o
  if (%chan.h) %:echo $str($chr(160),5) $chr(3) $+ %::c3 $+ - $+ $chr(3) $+ %::c2 $+ - $+ $chr(3) $+ %::c1 $+ > Half-Opped in $+ $chr(3) $+ %::c2 $+ : $+ $chr(3) $+ %::c3 %chan.h
  if (%chan.v) %:echo $str($chr(160),5) $chr(3) $+ %::c3 $+ - $+ $chr(3) $+ %::c2 $+ - $+ $chr(3) $+ %::c1 $+ > Voiced in $+ $chr(3) $+ %::c2 $+ : $+ $chr(3) $+ %::c3 %chan.v
  if (%chan.r) %:echo $str($chr(160),5) $chr(3) $+ %::c3 $+ - $+ $chr(3) $+ %::c2 $+ - $+ $chr(3) $+ %::c1 $+ > Regular in $+ $chr(3) $+ %::c2 $+ : $+ $chr(3) $+ %::c3 %chan.r
  if (%::wserver) %:echo $str($chr(160),5) $chr(3) $+ %::c3 $+ - $+ $chr(3) $+ %::c2 $+ - $+ $chr(3) $+ %::c1 $+ > Server $+ $chr(3) $+ %::c2 $+ : $+ $chr(3) $+ %::c3 %::wserver $iif(%::serverinfo,$chr(3) $+ %::c1 $+ $chr(91) $+ $chr(3) $+ %::c3 %::serverinfo $chr(3) $+ %::c1 $+ $chr(93))
  if (%::away) %:echo $str($chr(160),5) $chr(3) $+ %::c3 $+ - $+ $chr(3) $+ %::c2 $+ - $+ $chr(3) $+ %::c1 $+ > Away $+ $chr(3) $+ %::c2 $+ : $+ $chr(3) $+ %::c3 %::away
  if (%::operline) || (%::auth) %:echo $str($chr(160),5) $chr(3) $+ %::c3 $+ - $+ $chr(3) $+ %::c2 $+ - $+ $chr(3) $+ %::c1 $+ > Status: $+ $chr(3) $+ %::c3 $iif(%::auth,Currently authed as $gettok(%::auth,1,32) $iif(%::operline,$+($chr(40),IRCop,$chr(41))),Currently an IRCop)
  if (%::auth) unset %::auth
  if (%::hostip) unset %::hostip
  if (%::idletime) %:echo $str($chr(160),5) $chr(3) $+ %::c3 $+ - $+ $chr(3) $+ %::c2 $+ - $+ $chr(3) $+ %::c1 $+ > Idle $+ $chr(3) $+ %::c2 $+ : $+ $chr(3) $+ %::c3 $duration(%::idletime) $chr(3) $+ %::c1 $+ $chr(91) $chr(3) $+ %::c2 $+ S $+ $chr(3) $+ %::c3 $+ ignon $chr(3) $+ %::c2 $+ T $+ $chr(3) $+ %::c3 $+ ime $+ $chr(3) $+ %::c1 $+ : $+ $chr(3) $+ %::c3 $asctime($ctime(%::signontime),dd/mm/yyyy $chr(3) $+ %::c2 $+ ( $+ $chr(3) $+ %::c3 $+ dddd $chr(3) $+ %::c1 $+ @ $+ $chr(3) $+ %::c3 hh:nn:ss $+ $chr(3) $+ %::c2 $+ )) $chr(3) $+ %::c3 $+ - $chr(3) $+ %::c2 $+ O $+ $chr(3) $+ %::c3 $+ nline for $+ $chr(3) $+ %::c1 $+ : $+ $chr(3) $+ %::c3 $duration($calc($ctime - $ctime(%::signontime))) $chr(3) $+ %::c1 $+ $chr(93)
  %:echo $chr(3) $+ %::c3 $+ - $+ $chr(3) $+ %::c2 $+ - $+ $chr(3) $+ %::c1 $+ > $+ $chr(3) $+ %::c3 End of $chr(3) $+ %::c1 $+ / $+ $chr(3) $+ %::c2 $+ W $+ $chr(3) $+ %::c3 $+ hois $+ $chr(3) $+ %::c1 $str($chr(150),$round($calc(($width(--> /Whois : %::nick $str($chr(150),25),10,tahoma) - $width(--> End of /Whois  ,10,tahoma)) / $width($chr(150),10,tahoma)))))
}
alias -l dh_comchan {
  var %x = 1
  while ($comchan($$1,%x)) {
    var %dh_comchan $addtok(%dh_comchan,$ifmatch,32)
    inc %x
  }
  return %dh_comchan
}
alias dirtyhumpa.topic {
  %:echo $chr(3) $+ %::c1 $+ $str($chr(151),20)
  %:echo $chr(160) $chr(3) $+ %::c3 $+ Topic $+ $chr(3) $+ %::c1 $+ : $+ $chr(3) $+ %::c3 %::text
}
alias dirtyhumpa.topic2 {
  %:echo $chr(160) $chr(3) $+ %::c3 $+ Set by $+ $chr(3) $+ %::c1 $+ : $+ $chr(3) $+ %::c2 %::nick $chr(3) $+ %::c3 $+ on $+ $chr(3) $+ %::c2 %::text
  %:echo $chr(3) $+ %::c1 $+ $str($chr(151),20)
}
alias dirtyhumpa.whowas {
  %:echo $chr(3) $+ %::c3 $+ - $+ $chr(3) $+ %::c2 $+ - $+ $chr(3) $+ %::c1 $+ > / $+ $chr(3) $+ %::c2 $+ W $+ $chr(3) $+ %::c3 $+ howas $chr(3) $+ %::c1 $+ : $+ $chr(3) $+ %::c3 %::nick $chr(3) $+ %::c1 $+ $str($chr(150),25)
  %:echo $str($chr(160),5) $chr(3) $+ %::c3 $+ - $+ $chr(3) $+ %::c2 $+ - $+ $chr(3) $+ %::c1 $+ > Name $+ $chr(3) $+ %::c2 $+ : $+ $chr(3) $+ %::c3 %::realname $chr(3) $+ %::c2 $+ ( $+ $chr(3) $+ %::c3 $+ %::address $+ $chr(3) $+ %::c2 $+ )
  var %x = 1
  while ($gettok(%::chan,%x,32)) {
    var %chan.pre = $left($ifmatch,1)
    if (%chan.pre == @) var %chan.o = $addtok(%chan.o,$iif($istok($dh_comchan(%::nick),$right($gettok(%::chan,%x,32),-1),32),$+(,$right($gettok(%::chan,%x,32),-1),),$right($gettok(%::chan,%x,32),-1)),32)
    elseif (%chan.pre == %) var %chan.h = $addtok(%chan.h,$iif($istok($dh_comchan(%::nick),$right($gettok(%::chan,%x,32),-1),32),$+(,$right($gettok(%::chan,%x,32),-1),),$right($gettok(%::chan,%x,32),-1)),32)
    elseif (%chan.pre == +) var %chan.v = $addtok(%chan.v,$iif($istok($dh_comchan(%::nick),$right($gettok(%::chan,%x,32),-1),32),$+(,$right($gettok(%::chan,%x,32),-1),),$right($gettok(%::chan,%x,32),-1)),32)
    elseif (%chan.pre == $chr(35)) var %chan.r = $addtok(%chan.r,$iif($istok($dh_comchan(%::nick),$gettok(%::chan,%x,32),32),$+(,$gettok(%::chan,%x,32),),$gettok(%::chan,%x,32)),32)
    inc %x
  }
  if (%chan.o) %:echo $str($chr(160),5) $chr(3) $+ %::c3 $+ - $+ $chr(3) $+ %::c2 $+ - $+ $chr(3) $+ %::c1 $+ > Opped in $+ $chr(3) $+ %::c2 $+ : $+ $chr(3) $+ %::c3 %chan.o
  if (%chan.h) %:echo $str($chr(160),5) $chr(3) $+ %::c3 $+ - $+ $chr(3) $+ %::c2 $+ - $+ $chr(3) $+ %::c1 $+ > Half-Opped in $+ $chr(3) $+ %::c2 $+ : $+ $chr(3) $+ %::c3 %chan.h
  if (%chan.v) %:echo $str($chr(160),5) $chr(3) $+ %::c3 $+ - $+ $chr(3) $+ %::c2 $+ - $+ $chr(3) $+ %::c1 $+ > Voiced in $+ $chr(3) $+ %::c2 $+ : $+ $chr(3) $+ %::c3 %chan.v
  if (%chan.r) %:echo $str($chr(160),5) $chr(3) $+ %::c3 $+ - $+ $chr(3) $+ %::c2 $+ - $+ $chr(3) $+ %::c1 $+ > Regular in $+ $chr(3) $+ %::c2 $+ : $+ $chr(3) $+ %::c3 %chan.r
  if (%::wserver) %:echo $str($chr(160),5) $chr(3) $+ %::c3 $+ - $+ $chr(3) $+ %::c2 $+ - $+ $chr(3) $+ %::c1 $+ > Server $+ $chr(3) $+ %::c2 $+ : $+ $chr(3) $+ %::c3 %::wserver $iif(%::serverinfo,$chr(3) $+ %::c1 $+ $chr(91) $+ $chr(3) $+ %::c3 %::serverinfo $chr(3) $+ %::c1 $+ $chr(93))
  %:echo $chr(3) $+ %::c3 $+ - $+ $chr(3) $+ %::c2 $+ - $+ $chr(3) $+ %::c1 $+ > $+ $chr(3) $+ %::c3 End of $chr(3) $+ %::c1 $+ / $+ $chr(3) $+ %::c2 $+ W $+ $chr(3) $+ %::c3 $+ howas $+ $chr(3) $+ %::c1 $str($chr(150),$round($calc(($width(--> /Whowas : %::nick $str($chr(150),25),10,tahoma) - $width(--> End of /Whowas  ,10,tahoma)) / $width($chr(150),10,tahoma)))))
}
alias dirtyhumpa.names {
  if (!%::namesdone) {
    %:echo %::pre $chr(3) $+ %::c1 $+ / $+ $chr(3) $+ %::c2 $+ N $+ $chr(3) $+ %::c3 $+ ames for $+ $chr(3) $+ %::c2 %::chan $+ $chr(3) $+ %::c1 $str($chr(150),25)
    set %i 1
    set %::namesdone $true
  }
  var %x = 1, %::text = $gettok(%::text,2-,32)
  while (%x <= $numtok(%::text,32)) {
    if (%i == 12) {
      %:echo $str($chr(160),3) %::names
      unset %::names
      var %i = 1
    }
    elseif (%i < 12) {
      set %::names $addtok(%::names,$gettok(%::text,%x,32),32)
      inc %i
    }
    inc %x
  }
}
alias dirtyhumpa.names2 if (%::names) %:echo $str($chr(160),3) %::names | %:echo %::pre $chr(3) $+ %::c3 $+ End of $chr(3) $+ %::c1 $+ / $+ $chr(3) $+ %::c2 $+ N $+ $chr(3) $+ %::c3 $+ ames $+ $chr(3) $+ %::c1 $str($chr(150),$round($calc(($width(--> /Names for %::chan $str($chr(150),25),10,tahoma) - $width(--> End of /Names $+ $chr(32),10,tahoma)) / $width($chr(150),10,tahoma)),0)) | unset %::name*
alias dirtyhumpa.lusers {
  %:echo $chr(3) $+ %::c3 $+ - $+ $chr(3) $+ %::c2 $+ - $+ $chr(3) $+ %::c1 $+ > $chr(3) $+ %::c3 $+ Start of $chr(3) $+ %::c1 $+ / $+ $chr(3) $+ %::c2 $+ L $+ $chr(3) $+ %::c3 $+ users $+ $chr(3) $+ %::c1 : $+ $chr(3) $+ %::c3 %::server
  %:echo $str($chr(160),5) $chr(3) $+ %::c1 $+ ¤ $+ $chr(3) $+ %::c3 Invisible $+ $chr(3) $+ %::c1 $+ : $+ $chr(3) $+ %::c3 %::text
  %:echo $str($chr(160),5) $chr(3) $+ %::c1 $+ ¤ $+ $chr(3) $+ %::c3 Servers $+ $chr(3) $+ %::c1 $+ : $+ $chr(3) $+ %::c3 %::value
}
alias dirtyhumpa.bans {
  if (!%::bans) {
    set %::bans $true
    %:echo %::pre $chr(3) $+ %::c3 $+ Start of $chr(3) $+ %::c1 $+ B $+ $chr(3) $+ %::c3 $+ ans $chr(3) $+ %::c2 $+ L $+ $chr(3) $+ %::c3 $+ ist $chr(3) $+ %::c1 $+ : $+ $chr(3) $+ %::c3 %::chan
  }
  %:echo $str($chr(160),2) $+($chr(3),%::c3,$chr(155),$chr(3),%::c2,$chr(155),$chr(3),%::c1,$chr(155),$chr(3),%::c3) Banned $+ $chr(3) $+ %::c1 $+ : $+ $chr(3) $+ %::c3 $gettok(%::text,1,32) $chr(3) $+ %::c1 $+ - $+ $chr(3) $+ %::c3 Banned by $+ $chr(3) $+ %::c1 $+ : $+ $chr(3) $+ %::c3 $gettok(%::text,2,32) $chr(3) $+ %::c1 $+ $chr(40) $+ $chr(3) $+ %::c2 $+ T $+ $chr(3) $+ %::c3 $+ ime $+ $chr(3) $+ %::c1 $+ : $+ $chr(3) $+ %::c3 $asctime($gettok(%::text,3,32),dd/mm/yyyy $chr(3) $+ %::c2 $+ ( $+ $chr(3) $+ %::c3 $+ dddd $chr(3) $+ %::c1 $+ @ $+ $chr(3) $+ %::c3 h:nn:ss $+ $chr(3) $+ %::c2 $+ )) $chr(3) $+ %::c1 $+ - $chr(3) $+ %::c2 B $+ $chr(3) $+ %::c3 $+ anned $chr(3) $+ %::c2 $+ T $+ $chr(3) $+ %::c3 $+ ime $+ $chr(3) $+ %::c1 $+ : $+ $chr(3) $+ %::c3 $duration($calc($ctime - $gettok(%::text,3,32))) $+ $chr(3) $+ %::c1 $+ $chr(41)
}
alias dirtyhumpa.bans2 {
  unset %::bans
  %:echo %::pre $chr(3) $+ %::c3 $+ End of $chr(3) $+ %::c1 $+ B $+ $chr(3) $+ %::c3 $+ ans $chr(3) $+ %::c2 $+ L $+ $chr(3) $+ %::c3 $+ ist
}
