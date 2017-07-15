alias tribe.start {
  color inactive 1
  %:echo i n v i s i b l e   $+ %::c2 $+ b l u e ]
  %:echo [tribe default colour scheme#@!
  %:echo [by kefz ported by airjer
  %:echo [w00t
}
alias tribe.start.nuclear {
  color inactive 1
  %:echo [ n u c l e a r   f u s i o n ]
  %:echo [tribe nuclear fusion scheme
  %:echo [by kefz ported by airjer
  %:echo [w00t
}
alias tribe.start.radiation {
  color inactive 1
  %:echo [ r a d i a t i o n ]
  %:echo [tribe nuclear fusion scheme
  %:echo [by kefz ported by airjer
  %:echo [w00t
}
alias tribe.dns {
  %:echo •¯¯¯¯¯¯¯¯¯¯¯[  $+ %::c2 lookup : %::nick $+  ]
  %:echo [ $+ %::c2 $+ address: %::naddress [ $+ %::c2 $+ resolve: %::iaddress
  %:echo •___________[  $+ %::c2 dns $+ %::c2 $+  ] 
}

alias tribe.whoisstart {
  if ($1) %:echo •¯¯¯¯¯¯¯¯¯¯¯¯¯¯[  $+ %::c2 $+ Whois %::nick $+  ] 
  else %:echo •¯¯¯¯¯¯¯¯¯¯¯¯¯¯[  $+ %::c2 $+ Whois %::nick $+  ] 
  %:echo [ $+ %::c2 $+ u@h: %::address
  %:echo [ $+ %::c2 $+ realname: %::realname
}

alias tribe.whowasstart {
  if ($1) %:echo •¯¯¯¯¯¯¯¯¯¯¯¯¯¯[  $+ %::c2 $+ Whowas %::nick $+  ] 
  else %:echo •¯¯¯¯¯¯¯¯¯¯¯¯¯¯[  $+ %::c2 $+ Whowas %::nick $+  ] 
  %:echo [ $+ %::c2 $+ u@h: %::address
  %:echo [ $+ %::c2 $+ realname: %::realname
}

alias tribe.st return $remove($duration($$1),ks,k,ays,ay,rs,r,ins,in,ecs,ec)

alias tribe.names {
  if (%::chan != %::tribetheme.names.chan) {
  if ($1) %:echo  $+ %::c2 $+ [  $+ %::chan $+  $+ %::c2 $+ ] 
  else %:echo  $+ %::c2 $+ [  $+ %::chan $+  $+ %::c2 $+ ] 
    %::tribetheme.names.chan = %::chan
  }
  var %x = 0
  %::text = $gettok(%::text,2-,32)
  while ($gettok(%::text,$+($calc(1 + %x),-,$calc(%x + 4)),32)) {
    var %names = $ifmatch, %y = 1, %names2
    while ($gettok(%names,%y,32)) {
      %names2 = $addtok(%names2,   $ifmatch,32)
      inc %y
    }
    %:echo  $+ %::c2 $+ [  $+ %::chan $+  $+ %::c2 $+ ]  %names2
    inc %x 4
  }
}

alias tribe.endnames {
  %:echo  $+ %::c2 $+ [  $+ %::chan $+  $+ %::c2 $+ ]  end
  if (-s isin %:echo) %:echo -
  unset %::tribetheme.names.*
}

alias tribe.topic {
  %:echo [ modes.. $+ %::modes o.. $+ $nick(%::chan,0,o) v.. $+ $nick(%::chan,0,v) total.. $+ $nick(%::chan,0)
  if ($1) %:echo [ topic.. $+ %::text
  else %:echo [ topic.. $+ %::text
}

alias tribe.endtopic {
  %:echo •_______[  $+ %::c2 $+ chanstats ] 
}