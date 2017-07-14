[mts]
Name (c)rackrock
Author tabo
EMail tabo@airc.ws
Website http://www.airc.ws
Description (c)rackrock(bitchx) - now you can't say that there are no good mts themes, based on sulk's (c)rackrock theme for aIRC (www.sulk.ca)
Version 1.0
MTSVersion 1.1

RGBColors 255,255,255 0,0,0 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 0,0,252 255,0,255 127,127,127 210,210,210
Colors  1,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,1,0,1,0
BaseColors 14,00,13,11

FontDefault Terminal,12
FontChan Terminal,12
FontQuery Terminal,12

Prefix 14:10:11:
Timestamp 
ParenText 14(15<text>14)

Script          crk.mrc
Load            <pre> Loaded theme (c)rackrock- /crksv to say what you are using
Unload          <pre> Unloaded theme (c)rackrock

ActionChan      14≡ 08<nick>/<target> <text>
ActionChanSelf  14∙12∞14∙ <me> <text>
ActionQuery     14≡ 08<nick>/<target> <text>
ActionQuerySelf 14∙12∞14∙ <me> <text>
Ctcp            !Script %:echo %::pre 14[11c10tcp14(11 $+ %::nick $+ 14)]15 $upper(%::ctcp) %::text %:comments
CtcpChan        !Script %:echo %::pre 14[11c10tcp14(11 $+ %::chan $+ 14)]15 From10 %::nick 11:10 $upper(%::ctcp) %parms %:comments
CtcpChanSelf    !Script %:echo » 14[11c10tcp14(11 $+ %::chan $+ 14)] $upper(%::ctcp) %::text %:comments
CtcpReply       !Script %:echo %::pre 14[11c10tcp14(11 $+ %::nick $+ 14)]15 $upper(%::ctcp) 14reply10 %::text %:comments
CtcpReplySelf   -> <nick <ctcp> <text>
CtcpSelf        !Script %:echo » 14[11c10tcp14(11 $+ %::nick $+ 14)] $upper(%::ctcp) %::text %:comments
Invite          !Script _crackrockmts.invite
Join            <pre> 11<nick> 14[10<address>]15 has joined <chan>
JoinSelf        <pre> 11<nick> 14[10<address>]15 has joined <chan>
Kick            <pre> 00<knick> 15was kicked off00 <chan> 15by10 <nick> <parentext>
KickSelf        <pre> 10You15 were kicked off 10<chan> 15by10 <nick> <parentext>
Mode            !Script %:echo %::pre 14[00m15ode14/ $+ $left(%::chan,1) $+ 11 $+ $right($left(%::chan,-1),-1) $+ 10 $+ $right(%::chan,1) $+ 15(00 $+ %::modes $+ 15)14] by 11 $+ %::nick %:comments
ModeUser        !Script %:echo %::pre 14[00m15ode14/ $+ $left(%::nick,1) $+ 11 $+ $right($left(%::nick,-1),-1) $+ 10 $+ $right(%::nick,1) $+ 15(00 $+ %::modes $+ 15)14] %:comments
Nick            <pre> 00n15ickchange 14[(10<nick>14)15 ->14 (11<newnick>14)]
NickSelf        <pre> 00You14(15<nick>14)15 are now known as10 <newnick>
Notice          14-12<nick>14- <text>
NoticeChan      14-15<nick>14/15<target>14- <text>
NoticeSelf      15» 14[12n02otice14(12<nick>14)] <text>
NoticeSelfChan  15» 14[12n02otice14(12<chan>14)] <text>
NoticeServer    <c1><lt><c2>-<c1> [<nick><c1>]:  <text>
Part            <pre> <nick> 14[15<address>14]15 has left <chan> <parentext>
Quit            <pre> 14[00s15ignoff14]00 <nick> <parentext>
Rejoin          <pre> attempting to rejoin....
Snotice         09[03server09]!03<nick>09! <text>
TextChan        !Script %:echo 06< $+ $iif($me isin %::text,08,15) $+ %::nick $+ 06> %::text %:comments
TextChanSelf    06<lt>15<me>06<gt> <text>
TextMsg         14[13<nick>14(06<address>14)] <text>
TextMsgSelf     » 14[13m06sg14(13<nick>14)] <text>
TextQuery á     06<lt>15<nick>06<gt> <text>
TextQuerySelf á 06<lt>15<nick>06<gt> <text>
Topic           !Script %:echo %::pre 14[00t15opic14/10 $+ $left(%::chan,1) $+ 11 $+ $right($left(%::chan,-1),-1) $+ 10 $+ $right(%::chan,1) $+ 14(15 $+ %::nick $+ 14)] %::text
Wallop          <pre> wallops(<nick>): <text>

Echo            <pre> <text>
EchoTarget      <pre> <text>
Error           <pre> <c1>ERROR<c1><c2>:<c2> <text>

Whois           !Script _crackrockmts.whois
Whowas          !Script _crackrockmts.whowas

RAW.332         !Script %:echo %::pre 14[00t15opic14( $+ $left(%::chan,1) $+ 11 $+ $right($left(%::chan,-1),-1) $+ 10 $+ $right(%::chan,1) $+ 14)] %::text
RAW.333         !Script %:echo %::pre topic set by 10 $+ %::nick $+ 14 [10 $+ %::text $+ 14]
RAW.353         !Script _crackrockmts.names
RAW.366         !Script _crackrockmts.namesend

