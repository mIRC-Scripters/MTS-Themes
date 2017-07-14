alias _wstart {
  set %nicky %::nick
  %:echo  $+ %::c4 1 ::: Whois On7:1 %::Nick
  %:echo  $+ %::c4 1 ::: Addy7:1 %::address
  %:echo  $+ %::c4 1 ::: Name7:1 %::realname
}
alias _wend {
  %:echo  $+ %::c4 1 ::: Whois End7:1 %nicky
  unset %nicky
}
alias basic.load {
  clearall
  echo -a Anova Theme, By synthet|c. get it @ www.team-x-core.com
}
alias basic.st return $remove($duration($$1),ks,k,ays,ay,rs,r,ins,in,ecs,ec)
