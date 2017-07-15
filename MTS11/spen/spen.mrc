; ++ Aliases

alias spen_ { return   }
alias spen@ { if ($left($1,1) isin $prefix) return $ifmatch | else return $spen_ }
alias spenDur { return $replace($1-,wks,$+(,%::c4,w,,%::c1),wk,$+(,%::c4,w,,%::c1),days,$+(,%::c4,d,,%::c1),day,$+(,%::c4,d,,%::c1),hrs,$+(,%::c4,h,,%::c1),hr,$+(,%::c4,h,,%::c1),mins,$+(,%::c4,m,,%::c1),min,$+(,%::c4,m,,%::c1),secs,$+(,%::c4,s),sec,$+(,%::c4,s)) }
alias spenAddy { return $+($1,$replace($3,$chr(35),$+($2,$chr(35),$1),@,$+($2,@,$1),.,$+($2,.,$1),-,$+($2,-,$1),~,$+($2,~,$1),+,$+($2,+,$1),%,$+($2,%,$1),!,$+($2,!,$1))) }
alias spenTime { return $+(,%::c4,@,,%::c2,$replace($asctime(HH:nnt),:,$+(,%::c4,h,,%::c2),a,$+(,%::c4,a),p,$+(,%::c4,p))) }
alias spenCMode { if (!$len(%::cmode)) return   | else return %::cmode }
alias spenAlignL { return $+($2-,$str($spen_,$calc($1 - $len($strip($2-))))) }
alias spenAlignR { return $+($str($spen_,$calc($1 - $len($strip($2-)))),$2-) }

alias spenNames {
  var %i = 1

  while ($nick(%::chan,%i)) {
    %:echo $+( ,%::c4,[,%::c3,$spen@($nick(%::chan,%i).pnick),,%::c1,$spenAlignL(10,$nick(%::chan,%i)),,%::c4,]) $&
      $+(,%::c4,[,%::c3,$spen@($nick(%::chan,$calc(%i +1)).pnick),,%::c1,$spenAlignL(10,$nick(%::chan,$calc(%i +1))),,%::c4,]) $&
      $+(,%::c4,[,%::c3,$spen@($nick(%::chan,$calc(%i +2)).pnick),,%::c1,$spenAlignL(10,$nick(%::chan,$calc(%i +2))),,%::c4,]) $&
      $+(,%::c4,[,%::c3,$spen@($nick(%::chan,$calc(%i +3)).pnick),,%::c1,$spenAlignL(10,$nick(%::chan,$calc(%i +3))),,%::c4,])
    inc %i 4
  }
}
alias spenWhois {
  %:echo $+( ,,%::c2,ÚÄÄÄÄÄÄ,,%::c4,Å,,%::c2,ÄÄÄÄÄÄÄÄÄÄ ÄÄÄÄÄÄÄÄ ÄÄ ÄÄÄÄÄÄÄ ÄÄ Ä)
  %:echo $+( ,,%::c2,³, ,,%::c1,nick, ,,%::c4,|, ,,%::c1,%::nick, ,$iif(%::signontime,$+(,%::c4,$chr(40),,%::c1,signon,,%::c4,:,,%::c1, ,$replace($deltok(%::signontime,-1,32),:,$+(,%::c4,:,,%::c1)),,%::c4,$chr(41))))
  %:echo $+( ,,%::c2,³, ,,%::c1,addr, ,,%::c4,³, ,$spenAddy($+(,%::c1),$+(,%::c3),%::address))
  %:echo $+( ,,%::c2,³, ,,%::c1,name, ,,%::c4,³, ,,%::c1,$strip(%::realname))
  if (%::chan) %:echo $+( ,,%::c2,|, ,,%::c1,chan, ,,%::c4,³, ,$replace($spenAddy($+(,%::c1),$+(,%::c3),%::chan),$chr(35),$+(,%::c4,$chr(35),,%::c1),&,$+(,%::c4,&,,%::c1)))
  if (%::idletime) %:echo $+( , ,, ,,%::c1,idle, ,,%::c4,³, ,,%::c1,$spenDur(%::idletime))
  if (%::away) %:echo $+( , ,, ,,%::c1,away, ,,%::c4,³, ,,%::c1,$strip(%::away))
  if (%::isregd == is) %:echo $+( , ,, ,,%::c1,regd, ,,%::c4,³, ,,%::c1,yes)
  if (%::isoper == is) %:echo $+( , ,, ,,%::c1,oper, ,,%::c4,³, ,,%::c1,%operline)
  %:echo $+( , , , ,,%::c4,Ä ÄÄÁÄÄÄÄÄÄÄÄ ÄÄ ÄÄÄÄÄÄÄÄÄ ÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ ÄÄ Ä Ä)
}
