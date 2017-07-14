alias blx.whoisstart {
%:echo %::pre $+  $+ %::c3 Whois                    
%:echo %::pre $+  $+ %::c3 Nick : $+ %::c1 %::nick
%:echo %::pre $+  $+ %::c3 Realname : $+ %::c1 %::realname
%:echo %::pre $+  $+ %::c3 Address : $+ %::c1 %::address
}
alias blx.whoisend {
%:echo %::pre $+  $+ %::c3 Whois end             
}
alias blx.whowasstart {
%:echo %::pre $+  $+ %::c3 Whowas                    
%:echo %::pre $+  $+ %::c3 Nick : $+ %::c1 %::nick
%:echo %::pre $+  $+ %::c3 Realname : $+ %::c1 %::realname
%:echo %::pre $+  $+ %::c3 Address : $+ %::c1 %::address
}
alias blx.whowasend {
%:echo %::pre $+  $+ %::c3 Whowas end             
}
alias blx.who {
%:echo %::pre $+  $+ %::c3 Who start
%:echo %::pre $+  $+ %::c3 Nick : $+ %::c1 %::nick
%:echo %::pre $+  $+ %::c3 Address : $+ %::c1 %::address
%:echo %::pre $+  $+ %::c3 Cmode : $+ %::c1 %::cmode
%:echo %::pre $+  $+ %::c3 Away : $+ %::c1 %::away
%:echo %::pre $+  $+ %::c3 Channels : $+ %::c1 <chan>
%:echo %::pre $+  $+ %::c3 Server : $+ %::c1 <wserver>
%:echo %::pre $+  $+ %::c3 Realname : $+ %::c1 %::realname
%:echo %::pre $+  $+ %::c3 IRCop : $+ %::c1 <isoper>
}