alias Deefece.text { 
  var %c = $iif(%::cnick,$ifmatch,%::c1) 
  if ($1 = chan) { var %s = $chr(35) , %m = $+(,%::c3,%::cmode)  } 
  elseif ($2 = self) { var %s = $iif($left(%::target,1) = $chr(61),=,?) , %c = $cnick($me).color }
  else { var %s = $iif($chat(%::target),=,?)  }
  %:echo $+(,%::c4,[,,%::c3,%s,,%::c4,] $iif(%m,%m,$chr(32)),,%c,%::nick ,%::c4,$chr(41),,%::c1 %::text)
}

alias Deefece.jpq { 
  if ($1 = Joinself) { 
    if ($line(%::chan,0)) { %:echo  }
    %:echo %::pre $+(,%::c4,$gettok($2-,1,44) ,%::c2,%::chan ,%::c4,. $gettok($2-,2-,44)) 
    hadd -m Deefece.chanstats %::chan 1
    ; Kte preview support . I couldn't found the way to do a support to MTS engine by Erik^^ 
    ; without modifing the source file of the engine.
    if (%:echo = kte_drawpreview) { Deefece.chanstats %::chan }
  }
  else {
    if ($1 != Join) && (%::text != %::nick) { var %t = %::parentext }
    %:echo %::pre $+(,$iif($1 = join,%::c4,$iif($1 = Part,%::c1,%::cnick)),$1 ,%::c2,%::chan ,%::c4,: ,%::cnick,%::nick,,%::c3,!,%::cnick,$r@(%::address))  %t
  }
}

alias Deefece.raw.305 {
  tokenize 44 $1-
  if (%deefece.amsg) { 
    %:echo %::pre $+(,%::c1,$1,,%::c2 $ifmatch) $+(,%::c4,$chr(40),,%::c1,$duration(%deefece.atime),,%::c4,$chr(41))
    unset %deefece.amsg %deefece.atime
  }
  else { %:echo %::pre $+(,%::c1,$2) }
}

alias Deefece.raw.324 { 
  if ($hget(Deefece.chanstats,$1)) { Deefece.chanstats $1 $2- }
  else {
    if (%::modes = +) { var %m = -No mode- }
    var %t = $iif($len(%::modes) > 2,are,is)
    %:echo %::pre $+(,%::c1,Mode $+ $iif(%t = are,s) of $+(,%::c2,%::chan,,%::c1) %t $+ :,,%::c2) $iif(%m,%m,%::modes)
  }
}

alias Deefece.raw.352 { deefece.whoxadd Realname:,Address:,Channels:,Server:,Away:,IRCop:,Yes,No,End of who. | deefece.whox }

alias Deefece.chanstats { 
  if (!$1) { tokenize 32 $chan } | var %c = $iif(%:echo,%:echo,echo -n $1)
  ; The reason to use vars is only for Kte preview support 
  if (%:echo = kte_drawpreview) { var %m = +nt , %t = 4 , %ops = 1 (25%) , %vo = 1 (25%) , %re = 0 (0%) }
  else { var %m = $iif($2 != +,$2-) , %t = $nick($1,0) , %ops = $estc($1,o) , %vo = $estc($1,v) , %re = $estc($1,r) }
  %c 
  %c $+(,$chr(32),|,$1,| %m ,) [Total: %t $+ ] Ops: $+ %ops / Voiced: %vo / Regular: %re   $asctime($ctime,hh:nn:ss zzz)  
  %c 
  if ($hget(Deefece.chanstats,$1)) { hdel Deefece.chanstats $1 } 
  if ($hget(Deefece.chanstats)) && ($hget(Deefece.chanstats,0).item = 0) { hfree Deefece.chanstats }
}

alias -l estc { var %n = $nick($1,0,$2) | return %n $+(,$chr(40),,$round($calc(%n * 100 / $nick($1,0,a)),2),%,,$chr(41),) }

alias Deefece.kick { 
  if (%::text != %::nick) { var %t = %::parentext }
  if ($1 = Self) { %:echo %::pre $+(,%::c1,You were kicked from ,%::c2,%::chan $a)  %t }
  else { %:echo %::pre $+(,%::c1,Kick ,%::c2,%::chan ,%::c1,: ,%::c2,%::knick,) $a  %t }
}

alias Deefece.topic { %:echo %::pre $+(,%::c4,Topic ,%::c2,%::chan ,%::c4,: $iif(%::text," %::text ",4-Cleared-)) $a }

alias -l a {
  var %c = $iif(%::cnick,%::cnick,%::c2)
  return $+(,%::c4,$chr(40),,%c,%::nick,,%::c3,!,,%c,$r@(%::address),,%::c4,$chr(41))
}

alias Deefece.ctcp { 
  %:echo  $+(,%::c4,.,%::c1,.,%::c2,: $upper(CTCP %::ctcp) ,%::c2,:,%::c1,.,%::c4,.,%::c1,$chr(32) $gettok($1-,1,44),) $+(,%::c2, %:: [ $+ [ $iif($gettok($1-,2,44),$ifmatch,nick) ] ] ) $+(,%::c1,%::text)  
}

alias Deefece.notify { %:echo %::pre $+(,%::c4,$1,: ,%::c2,%::nick,,%::c3,!,%::c2,$r@(%::address) ,%::c1,$2-,) %::parentext }

alias Deefece.dns { 
  var %pre = %:echo $+(,%::c2,»,,%::c1,»,,%::c4,» ,%::c2,DNS:)
  if ($1 = error) { %pre  $+ %::c1 $2- }
  else { %pre $+(,%::c1,$iif(%::nick,$ifmatch,-No nick-),$chr(32),,%::c4,$chr(40),,%::c2,$r@(%::address),,%::c4,$chr(41) ,%::c1,$1-,,%::c2) %::raddress }
}

alias Deefece.whox { 
  ; The alias use hash table data to show the text , and kte preview don't show it correctly
  ; after you click preview twice, so if %:echo value is kte_drawpreview , the alias only destroy
  ; the table. Same goes for MTS engine
  if (%:echo = kte_drawpreview) || (%:echo = mtsprview 15 2) { goto end }
  var %c = $+(,%::c4) , %l =           %::pre , %n = $+(,%::c1)
  %:echo %c $+(]——[,,%::c1) $iif($1 = is,Whois,$iif(!$1,Who,Whowas)) $+ : $+(,%::c2,%::nick) $+(,%::c4,]——————————————————————————[)
  if ($1 = is) || ($1 = was) || (!$1) {
    %:echo %l $who(1) %n $strip(%::realname,b)
    %:echo %l $who(2) %n %::address
    %:echo %l $who(4) %n %::wserver $iif($1 = was, $+(,%::c4,$who(3),%n) $gettok(%::serverinfo,4,32)) $iif(!$1,$+(,%::c4,$chr(40),,%::c1,%::value,,%::c4,$chr(41)))
    if ($1 = is) || (!$1) {
      var %w = 1 | while ($wrap(%::chan,$window($active).font,$window($active).fontsize,220,%w)) { var %r = $ifmatch | %:echo %l $who(3) %n %r | inc %w }
      ; This var is to fix a bug in MTS engine by Erik^^ 
      if (!%::isregd) { var %::isregd = %::isreg }  
      var %oper = $iif(%::isoper,$ifmatch,is not) , %reg = $iif(%::isregd,$ifmatch,is not)
      if ($1 = is) && (%::signontime) { %:echo %l $who(6) %n %::signontime $+(,%::c4,$who(7),%n) %::idletime }
      if (!$1) { var %reg = $iif(%::away = g,is,is not) }
      %:echo %l $who($iif($1 = is,8,5)) %n $+ $who(%reg).yn $+(,%::c4,$who($iif($1 = is,9,6)),%n) $who(%oper).yn
    }
  }
  else { %:echo %l $1- | deefece.whoxadd X }
  %:echo %c $+(]——[,,%::c1) $who($who(0)) $+(,%::c4,]————————————————————[)
  :end | if ($hget(Deefece.Raw)) { hfree Deefece.Raw }
}

alias away { 
  if (!$1) { %deefece.atime = $awaytime | %deefece.amsg = $awaymsg | away }
  else { .timer.away -m 1 0 !away $1- | .timer.away -e | halt }
}

alias deefece.whoxadd { hadd -m Deefece.Raw Info $1- }
alias -l r@ { return $replace($1,@,$+(,%::c3,@,,$iif(%::cnick,%::cnick,%::c2))) }
alias -l who { if ($prop = yn) { tokenize 32 $iif($numtok($1,32) > 1,-2,-3) } | return $gettok($hget(Deefece.Raw,info),$1,44) }

on *^:hotlink:+*:*:{ return }
on *^:hotlink:-*:*:{ return }
on *:hotlink:+*:*:{ inverse.mode $hotline }
on *:hotlink:-*:*:{ inverse.mode $hotline }

alias -l inverse.mode { 
  ; I think that this alias is not 100% compatible with all mode changes
  ; sorry if what I think is true.
  tokenize 32 $strip($2-3 $replace($5,-,<->,+,-,<->,+) $6-  )
  tokenize 32 $gettok($1-,$+(1-,$calc($numtok($1-,32) - 3)),32)
  if ($1 = Mode) {
    if  ($2 = $me) { .raw mode $me %i }
    else {
      if (-*k* iswm $3) || +*k* iswm $3) { var %k = $ [ $+ [ $0 ] ] }
      if (+l isin $3) { var %l = $4 }
      if ($me isop $2)  { 
        if (!%l) { var %l = $4 }
        if (+*k* iswm $3) && ($chan($2).key) { .raw mode $2 -k $ifmatch }
        .raw mode $2 $3 %l %k 
      }
    }
  }
}

; I put this in this way because this is an addon and maybe a script use his own .here. 
; hotlink so i have to use $hotline to catch the event.
on *^:hotlink:.*.:*:{ return }
on *:hotlink:.*.:*:{ 
  if (*DeeFeCe Theme loaded. Click .here. to see the readme file. iswm $strip($hotline)) { run $scriptdirreadme.txt }
}

on *^:hotlink:[*]:*: { return }
on *:hotlink:[*]:*: { tokenize 32 $strip($hotline) | drawmenu $2 $4-  }

alias -l drawmenu { 
  var %win = @Drawmenu | if (!$hget(%win)) { hmake %win 5 } | hadd %win Text $2- 
  tokenize 32 $target $iif($nick($target,$mid($1,2-)).pnick = $1,$mid($1,2-),$1)  
  if ($1 ischan) && ($me isop $1) { var %c = Kick $iif($ibl($1,$2),Unban,Ban) $iif($2 isop $1,Deop,Op)  }
  var %c = %c Ping Version Whois Chat Send Dns Ignore Unignore  
  var %n 1,%w 0 | while ($gettok(%c,%n,32)) { 
    if ($width($ifmatch,$window($1).font,$window($1).fontsize,1) > %w) { var %w = $ifmatch }
    inc %n
  }
  inc %w 20 | var %x $int($calc($mouse.mx - (%w / 2))),%y $calc($mouse.y - 5),%h $calc($height(%c,$window($1).font,$window($1).fontsize) + 4)  
  hadd -m %win Nick $1 | hadd %win Cid $cid | hadd %win H %h | %h = $calc(%h * $numtok(%c,32)) 
  hadd %win TH %h | hadd %win Items %c |  hadd %win Font $window($1).font 
  hadd %win FontSize $window($1).fontsize | hadd %win Kick kick $1 $2 
  hadd %win $iif($ibl($1,$2),Unban,Ban) ban $iif($ibl($1,$2),-r) $1 $2 0 
  hadd %win $iif($2 isop $1,Deop,Op) mode $1 $iif($2 isop $1,-o,+o) $2
  hadd %win Ping ctcp $2 ping | hadd %win Version ctcp $2 version | hadd %win Whois whois $2 $2 
  hadd %win Chat dcc chat $2 | hadd %win Send dcc send $2 | hadd %win Dns dns $2
  hadd %win Ignore .ignore $2 0 | hadd %win Unignore .ignore -r $2 0
  while ($calc(%y + %h) > $window(-3).h) { dec %y }
  window -hp+B +d %win %x %y %w $calc(%h + 2) | drawmenuitem $mouse.y | drawpic %win | window -a %win 
}

alias -l drawmenuitem { 
  var %win @Drawmenu , %h $hget(%win,h) 
  var %i = $calc($int($calc($mouse.y / %h)) + 1)
  drawrect -nfd %win $colour(info) 1 0 0 $window(%win).w $window(%win).h 15 15 
  drawrect -nd %win $colour(action) 1 0 0 $window(%win).w $window(%win).h 15 15 
  if (%i != $hget(%win,item)) { 
    var %n 1 
    while ($gettok($hget($active,items),%n,32)) { 
      var %t = $ifmatch , %y = $calc((%n - 1) * %h + 2) , %ct = 14 , %cs = 0
      if (%n = %i) { 
        var %ct = $colour(info) , %cs = $colour(background)
        drawrect -nfd %win $colour(highlight) 1 2 %y $calc($window(%win).w - 6) $calc(%h - 1) 
        drawrect -nd %win %cs 1 2 %y $calc($window(%win).w - 6) $calc(%h - 1) 
      }
      drawtext -on %win %cs $hget(%win,font) $hget(%win,fontsize) 9 $calc(%y + 1) %t
      drawtext -on %win %ct $hget(%win,font) $hget(%win,fontsize) 8 %y %t 
      inc %n
    }
    if (@Drawmenu = %win) { hadd %win Item %i | drawpic %win }
  }
}


Menu @Drawmenu { 
  mouse { drawmenuitem } 
  leave { window -c $active }
  sclick { scid $hget($active,cid) $hget($active,$gettok($hget($active,Items),$hget($active,Item),32)) |  window -c $active }
}

on *^&:close:@Drawmenu:{ hfree $target }
