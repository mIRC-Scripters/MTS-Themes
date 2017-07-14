alias codec.theme.load {
  clearall
  echo -a Codec Theme v1.0 by: synthet|c
}
alias codec.st return $remove($duration($$1),ks,k,ays,ay,rs,r,ins,in,ecs,ec)
alias codec.whois.start {
  %:echo 1-> 1┌────────────────15Whois1───────────────────┐
  %:echo 1-> $+(1├──────────────,15,%::nick,1─────────────────┤)
  %:echo 1-> 1├────────────────────────────────────────┘
  %:echo 1-> 1│Name:15 %::realname
  %:echo 1->  1│Addy:15 %::address
}
alias codec.whois.end {
  %:echo 1-> 1├────────────────────────────────────────┐
  %:echo 1-> $+(1├──────────────,15,%::nick,1─────────────────┤ )
  %:echo 1-> 1└────────────────15Whois1───────────────────┘
}
