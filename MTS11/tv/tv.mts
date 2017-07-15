[mts]
Name tunnelvision
Author tabo
EMail tabo@airc.ws
Website http://www.airc.ws
Description tunnelvision(bitchx) - because mts needed a theme like this, based on sulk's tunnelvision theme for aIRC (www.sulk.ca) - tested in airc and kte, not working in eric's engine (ask eric why)
Version 1.0
MTSVersion 1.1

RGBColors 255,255,255 0,0,0 0,0,127 72,164,80 255,88,80 184,64,32 156,0,156 252,127,0 232,240,64 120,236,128 80,168,176 0,255,255 96,96,255 255,0,255 127,127,127 192,192,192
Colors  1,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,0,1,0,1,14,15
BaseColors 14,00,13,11

FontDefault Terminal,12
FontChan Terminal,12
FontQuery Terminal,12

Prefix 14Í15ÍÍ
Timestamp 
ParenText 14(00<text>14)

Script          tv.mrc
Load            <pre> Loaded theme tunnelvision- /tvsv to say what you are using
Unload          <pre> Unloaded theme tunnelvision

ActionChan      10ð15 <nick> <text>
ActionChanSelf  10ð00 <nick> <text>
ActionQuery     10ð15 <nick> <text>
ActionQuerySelf 10ð00 <nick> <text>
Ctcp            !Script %:echo 14[00t10/v14]11 ctcp $lower(%::ctcp) $lower(%::text) 10from 14[13 $+ %::nick $+ 14/06 $+ %::address $+ 14]10 to you %:comments
CtcpChan        !Script %:echo 14[00t10/v14]11 ctcp $lower(%::ctcp) $lower(%::text) 10from 14[13 $+ %::nick $+ 14/06 $+ %::address $+ 14]10 to %::target %:comments
CtcpChanSelf    !Script %:echo 15#14> 14[00c15tcp14/11 $+ %::chan $+ 14!10@14]15 $lower(%::ctcp) $lower(%::text) %:comments
CtcpReply       14[00t10/v14]00 ctcp <ctcp> reply from <nick> $+ 14: <text>
CtcpReplySelf   -> <nick <ctcp> <text>
CtcpSelf        !Script %:echo 15#14> 14[00c15tcp14/11 $+ %::nick $+ 14!10@14]15 $lower(%::ctcp) $lower(%::text) %:comments
Invite          14[16t10/15v14] 14[06i13vitatio06n14/06<nick>14] 14(11<chan>14)15
Join            !Script %:echo %::pre 14[11 $+ %::nick $+ 14/10  $+ %::address $+ 14] 15joined channel 11 $+ $left(%::chan,1) $+ 10 $+ $right(%::chan,-1) %:comments
JoinSelf        !Script %:echo %::pre 14[11 $+ %::nick $+ 14/10  $+ %::address $+ 14] 15joined channel 11 $+ $left(%::chan,1) $+ 10 $+ $right(%::chan,-1) %:comments
Kick            <pre> 16<knick> 15was kicked by <nick>14: 10[15<text>10]
KickSelf        <pre> 16<knick> 15was kicked by <nick>14: 10[15<text>10]
Mode            !Script %:echo %::pre 14[00m15ode 00c15hange14/13 $+ $left(%::chan,1) $+ 06 $+ $right(%::chan,-1) $+ 14] "15 $+ %::modes $+ 14" 15 by %::nick %:comments
ModeUser        !Script %:echo %::pre 14[00m15ode 00c15hange14/13 $+ $left(%::nick,1) $+ 06 $+ $right(%::nick,-1) $+ 14] "15 $+ %::modes $+ 14" 15 by %::nick %:comments
Nick            <pre> 10<nick> is now known as 11<newnick>
NickSelf        <pre> 10<nick> is now known as 11<newnick>
Notice          15-11<nick>15- <text>
NoticeChan      15-10<nick>15:11<target>15- <text>
NoticeSelf      15#14> 14[00notice14/13<nick>06!*@*14] <text>
NoticeSelfChan  15#14> 14[00notice14/13<nick>06!*@*14] <text>
NoticeServer    <c1><lt><c2>-<c1> [<nick><c1>]:  <text>
Part            !Script %:echo %::pre 14[15 $+ %::nick $+ 14/15 $+ %::address $+ 14] 15left channel %::chan %:comments
Quit            <pre> 14[11s10ignoff14/6<nick>14] <parentext>
Rejoin          <pre> attempting to rejoin....
TextChan        !Script %:echo 06< $+ $iif($me isin %::text,13,15) $+ %::nick $+ 06> %::text %:comments
TextChanSelf    06<lt>15<nick>06<gt> <text>
TextMsg         14[13<nick>14!06<address>14] <text>
TextMsgSelf     15#14> [00m15sg14/11<nick>10!*@*14] <text>
TextQuery       06<lt>15<nick>06<gt> <text>
TextQuerySelf   06<lt>15<nick>06<gt> <text>
Topic           !Script %:echo %::pre 00topic14/11 $+ $left(%::chan,1) $+ 10 $+ $right(%::chan,-1) 14[ $+ %::nick $+ 14] %::text %:comments
Wallop          12!02<nick>12! <text>

Echo            <pre> <text>
EchoTarget      <pre> <text>
Error           <pre> <c1>ERROR<c1><c2>:<c2> <text>

Whois           !Script _tunnelvisionmts.whois
Whowas          !Script _tunnelvisionmts.whowas

RAW.332         !Script %:echo %::pre 00topic14/11 $+ $left(%::chan,1) $+ 10 $+ $right(%::chan,-1) $+ 14: %::text
RAW.333         !Script _tunnelvision.topicsetby
RAW.353         !Script _tunnelvisionmts.names
RAW.366         !Script _tunnelvisionmts.namesend

