alias wstart {
  %:echo 13ÿÿÿÿÿÚÄÄÄÄÄÄÄÄÄÄÄ15Whois13ÄÄÄÄÄÄÄÄÄÄ $+ $align(%::nick) $+ ÄÄÄÄ¿
  %:echo 13ÚÄÄÄÄÅÄÄÄÄÄÄÄÄÄÄÄÄ15 $+ %::nick $+ 13ÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÁÄÄÄÄ ù ù ÄÄ>
  %:echo 13³15Addy13³15 $replace(%::address,@,13@15,.,13.15)
  %:echo 13³15Name13³15 %::realname
}
alias wend {
  %:echo 13ÀÄÄÄÄÅÄÄÄÄÄÄÄÄÄÄÄÄ15 $+ %::nick $+ 13ÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÂÄÄÄÄ ù ù ÄÄ>
  %:echo 13ÿÿÿÿÿÀÄÄÄÄÄÄÄÄÄÄÄ15Whois13ÄÄÄÄÄÄ $+ $align(%::nick) $+ ÄÄÄÄÄÄÄÄÙ
}
alias dns.start {
  %:echo  13ÚÄÄÄÄÄÄÄ15DNS13ÄÄÄÄÄÄÄÄÄÄÄÄ ù ù ÄÄ>
  .timer -m 1 300 echo $timestamp 13ÀÄÄÄÄÄÄÄ15DNS13ÄÄÄÄÄÄÄÄÄÄÄÄ ù ù ÄÄ>
}
alias untitled.load echo  -a Untitled Theme v1.2 By: sreid
alias untitled.st return $replace($remove($remove($duration($$1),ks,k,ays,ay,rs,r,ins,in,ecs,ec),$chr(32)),:,13:15)
alias align return $right($str(Ä,$len($1-)),-3)
