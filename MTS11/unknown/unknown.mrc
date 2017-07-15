alias unk.whois { 
  %:echo $+(,%::c1,Ú,$str(Ä,9),Â,$str(Ä,5 - $calc($len(%::nick))),$chr(40),,%::c3,%::nick,,%::c1,$chr(41),$str(Ä,15 - $calc($len(%::nick)))) 
  %:echo $+(,%::c1,³) $+(,%::c2,nameÿÿÿÿ,,%::c1,³) $+(,%::c3,%::realname) 
  %:echo $+(,%::c1,³) $+(,%::c2,addressÿ,,%::c1,³) $+(,%::c3,%::address)
}
alias unk.chan %:echo $+(,%::c1,³) $+(,%::c2,chansÿÿÿ,,%::c1,³) $+(,%::c3,%::chan)
alias unk.serv %:echo $+(,%::c1,³) $+(,%::c2,serverÿÿ,,%::c1,³) $+(,%::c3,%::wserver)
alias unk.away %:echo $+(,%::c1,³) $+(,%::c2,awayÿÿÿÿ,,%::c1,³) $+(,%::c3,%::text)
alias unk.idle { 
  %:echo $+(,%::c1,³) $+(,%::c2,idleÿÿÿÿ,,%::c1,³) $+(,%::c3,$duration(%::idletime)) 
  %:echo $+(,%::c1,³) $+(,%::c2,sign onÿ,,%::c1,³) $+(,%::c3,%::signontime)
}
alias unk.end %:echo $+(,%::c1,À,$str(Ä,9),Á,$str(Ä,$len(%::nick)),$str(Ä,$len(%::nick)),$str(Ä,17 - $calc($len(%::nick))))
alias unk.load {
  %:echo $+(,%::c1,ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ¿) 
  %:echo $+(,%::c1,³) $+(,%::c2,ÿÿÿÿunknownÿthemeÿÿÿÿÿ,,%::c1,³) 
  %:echo $+(,%::c1,³) $+(,%::c2,ÿÿÿÿÿÿÿbyÿsn0wÿÿÿÿÿÿÿÿ,,%::c1,³)
  %:echo $+(,%::c1,³) $+(,%::c2,somaio,,%::c1,@,,%::c2,lover-boy,,%::c1,.,,%::c2,comÿÿ,,%::c1,³)
  %:echo $+(,%::c1,ÀÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÙ)
}
