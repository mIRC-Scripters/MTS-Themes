alias Eistee.nick {
  if ($prop == error) {
    if (!$1) return
    elseif (%::cmode == .)                    return $+(,$iif($cnick($1).color != $color(Listbox text),$cnick($1).color,05),$chr(40),04*,$color(Kick text).dd,$1,,$iif($cnick($1).color != $color(Listbox text),$cnick($1).color,05),$chr(41),,$color(Kick text).dd)
    elseif ((%::cmode == @) || ($1 isop $2))  return $+(,$iif($cnick($1).color != $color(Listbox text),$cnick($1).color,05),$chr(40),02@,$color(Kick text).dd,$1,,$iif($cnick($1).color != $color(Listbox text),$cnick($1).color,05),$chr(41),,$color(Kick text).dd)
    elseif ((%::cmode == %) || ($1 ishop $2)) return $+(,$iif($cnick($1).color != $color(Listbox text),$cnick($1).color,05),$chr(40),10%,$color(Kick text).dd,$1,,$iif($cnick($1).color != $color(Listbox text),$cnick($1).color,05),$chr(41),,$color(Kick text).dd)
    elseif ((%::cmode == +) || ($1 isvo $2))  return $+(,$iif($cnick($1).color != $color(Listbox text),$cnick($1).color,05),$chr(40),03+,$color(Kick text).dd,$1,,$iif($cnick($1).color != $color(Listbox text),$cnick($1).color,05),$chr(41),,$color(Kick text).dd)
    else                                      return $+(,$iif($cnick($1).color != $color(Listbox text),$cnick($1).color,05),$chr(40),,$color(Kick text).dd,$1,,$iif($cnick($1).color != $color(Listbox text),$cnick($1).color,05),$chr(41),,$color(Kick text).dd)
  }
  else {
    if (!$1) return
    elseif ((%::cmode == .) && ($1 != %::knick))                    return $+(,$cnick($1).color,$chr(40),04*,$1,,$cnick($1).color,$chr(41),)
    elseif (((%::cmode == @) || ($1 isop $2)) && ($1 != %::knick))  return $+(,$cnick($1).color,$chr(40),02@,$1,,$cnick($1).color,$chr(41),)
    elseif (((%::cmode == %) || ($1 ishop $2)) && ($1 != %::knick)) return $+(,$cnick($1).color,$chr(40),10%,$1,,$cnick($1).color,$chr(41),)
    elseif (((%::cmode == +) || ($1 isvo $2)) && ($1 != %::knick))  return $+(,$cnick($1).color,$chr(40),03+,$1,,$cnick($1).color,$chr(41),)
    else                                                            return $+(,$cnick($1).color,$chr(40),,$1,,$cnick($1).color,$chr(41),)
  }
}

alias Eistee.address {
  if (!$1) return
  else {
    if ($prop == error) return $+(05,$chr(40),,$color(Kick text).dd,$replace($1,!,$+(14!,$color(Kick text).dd),@,$+(14@,$color(Kick text).dd)),05,$chr(41),,$color(Kick text).dd)
    else return $+(,$color(Normal text).dd,$chr(40),,$replace($1,!,14!,@,14@),,$color(Normal text).dd,$chr(41),))
  }
}
alias Eistee.chan {
  if (!$1) return
  else {
    if ($prop == error) return $+(05,$chr(91),,$color(Kick text).dd,$1,05,$chr(93),,$color(Kick text).dd)
    else return $+(,$color(Normal text).dd,$chr(91),,$1,,$color(Normal text).dd,$chr(93),)
  }
}

alias Eistee.mode {
  if (!$1) return
  else {
    if ($prop == error) return $+(05',$color(Kick text).dd,$1,05',$color(Kick text).dd)
    else return $+(,$color(Normal text).dd,',$1,,$color(Normal text).dd,')
  }
}

alias Eistee.pre {
  if ($1 == 01) return $+($2,15•14•01•)
  if ($1 == 02) return $+($2,12•02•01•)
  if ($1 == 03) return $+($2,09•03•01•)
  if ($1 == 04) return $+($2,04•05•01•)
  if ($1 == 06) return $+($2,13•06•01•)
  if ($1 == 07) return $+($2,07•05•01•)
  if ($1 == 10) return $+($2,10•03•01•)
  if ($1 == 11) return $+($2,11•10•01•)
  if ($1 == 12) return $+($2,11•12•01•)
}

alias Eistee.whois {
  if (%::nick)     { %:echo $timestamp $Eistee.pre(02, ) 12··············02··············01··············14··············15·············· }
  if (%::address)  { %:echo $timestamp $Eistee.pre(02, )   $+                          %::nick  $+ $color(Info text).dd $+ is   $replace(%::address,$chr(64),$+(,$color(Info text).dd,$chr(64),)) }
  if (%::realname) { %:echo $timestamp $Eistee.pre(02, )  $+ $color(Background).dd $+ %::nick  $+ $color(Info text).dd $+ name %::realname }
  if (%::from)     { %:echo $timestamp $Eistee.pre(02, )  $+ $color(Background).dd $+ %::nick  $+ $color(Info text).dd $+ from $replace($gettok(%::from,4,32),$chr(64),$+(,$color(Info text).dd,$chr(64),)) | unset %::from }
  if (%::reg)      { %:echo $timestamp $Eistee.pre(02, )  $+ $color(Background).dd $+ %::nick  $+ $color(Info text).dd $+ is   $gettok(%::reg,2-,32) | unset %::reg }
  if (%::wserver)  { %:echo $timestamp $Eistee.pre(02, )  $+ $color(Background).dd $+ %::nick  $+ $color(Info text).dd $+ on   %::wserver  $+ $color(Info text).dd $+ « $+ %::serverinfo $+  $+ $color(Info text).dd $+ » }
  if (%::chan)     { %:echo $timestamp $Eistee.pre(02, )  $+ $color(Background).dd $+ %::nick  $+ $color(Info text).dd $+ chan $replace(%::chan,$chr(94),$+(07,$chr(94),),$chr(42),$+(06,$chr(42),),$chr(64),$+(12,$chr(64),),%,10%,+,03+) }
  if (%::lang)     { %:echo $timestamp $Eistee.pre(02, )  $+ $color(Background).dd $+ %::nick  $+ $color(Info text).dd $+ lang $gettok(%::lang,5-,32) | unset %::lang }
  if (%::bot)      { %:echo $timestamp $Eistee.pre(02, )  $+ $color(Background).dd $+ %::nick  $+ $color(Info text).dd $+ is   $gettok(%::bot,2-,32) | unset %::bot }
  if (%::help)     { %:echo $timestamp $Eistee.pre(02, )  $+ $color(Background).dd $+ %::nick  $+ $color(Info text).dd $+ is   $gettok(%::help,2-,32) | unset %::help }
  if (%::sec)      { %:echo $timestamp $Eistee.pre(02, )  $+ $color(Background).dd $+ %::nick  $+ $color(Info text).dd $+ is   $gettok(%::sec,2-,32) | unset %::sec }
  if (%::operline) { %:echo $timestamp $Eistee.pre(02, )  $+ $color(Background).dd $+ %::nick  $+ $color(Info text).dd $+ is   $gettok(%::operline,2-,32) }
  if (%::away)     { %:echo $timestamp $Eistee.pre(02, )  $+ $color(Background).dd $+ %::nick  $+ $color(Info text).dd $+ away %::away }
  if (%::idletime) { %:echo $timestamp $Eistee.pre(02, )  $+ $color(Background).dd $+ %::nick  $+ $color(Info text).dd $+ idle $duration(%::idletime)  $+ $color(Info text).dd $+ signed on « $+ %::signontime $+  $+ $color(Info text).dd $+ » }
  set %::Eistee.who Whois
}

alias Eistee.whowas {
  if (%::nick)       { %:echo $timestamp $Eistee.pre(02, ) 12··············02··············01··············14··············15·············· }
  if (%::address)    { %:echo $timestamp $Eistee.pre(02, )   $+                          %::nick  $+ $color(Info text).dd $+ was  $replace(%::address,$chr(64),$+(12,$chr(64),)) }
  if (%::realname)   { %:echo $timestamp $Eistee.pre(02, )  $+ $color(Background).dd $+ %::nick  $+ $color(Info text).dd $+ name %::realname }
  if (%::wserver)    { %:echo $timestamp $Eistee.pre(02, )  $+ $color(Background).dd $+ %::nick  $+ $color(Info text).dd $+ on   %::wserver }
  if (%::serverinfo) { %:echo $timestamp $Eistee.pre(02, )  $+ $color(Background).dd $+ %::nick  $+ $color(Info text).dd $+ last %::serverinfo }
  set %::Eistee.who Whowas
}

alias Eistee.who {
  %:echo $timestamp $Eistee.pre(02, ) 12··············02··············01··············14··············15··············
  %:echo $timestamp $Eistee.pre(02, ) $Eistee.nick(%::nick,%::chan) $Eistee.address(%::address) %::realname $Eistee.chan(%::chan)
  %:echo $timestamp $Eistee.pre(02, ) $Eistee.nick(%::nick,%::chan) $replace(%::away,H,03Online,G,04Away) $iif(r isin $gettok(%::text,5,32),12Registered) $iif(%::isoper == is,06IRCop) on %::wserver $gettok(%::text,6,32) hops
  set %::Eistee.who Who
}

alias Eistee.who.end {
  if (%::Eistee.who) {
    if ($numtok($1-,44) > 1) {
      %:echo $timestamp $Eistee.pre(02, ) 12··············02··············01··············14··············15··············
      %:echo $timestamp $Eistee.pre(02, ) $+(,$color(Info text).dd,%::Eistee.who target:) $1-
    }
    %:echo $timestamp $Eistee.pre(02, ) 12··············02··············01··············14··············15··············
    unset %::Eistee.who
  }
}

alias Eistee.error return $+(,$color(Kick text).dd,$1-)
