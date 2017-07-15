alias sombrawhois {
  %:echo $+(,%::c1) $+ … $+ whois %::nick  
  %:echo        $+ $+(,%::c1) $+ n $+ ame:  %::realname
  %:echo        $+ $+(,%::c1) $+ a $+ ddr: %::address
}
alias sombraidle { 
  %:echo        $+(,%::c1) $+ i $+ dle: $remove($duration(%::idletime),ecs,ins,rs,ks,in,ec,r,k,ay,ays,ks,$chr(32))  $+(,%::c1) $+ s $+ ignon: %::signontime
}
alias isaway {
  %:echo          $+ $+(,%::c1) $+ a $+ way: %::text
}
