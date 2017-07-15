[mts]
; Theme information
Name slug
MTSVersion 1.1
Version 0.1
Author Kalleth
EMail kalleth@nildram.co.uk
Script slug.mrc
Timestamp ON
TimestampFormat 15HHnn.ss|
BaseColors 13,12,11,15
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 159,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 148,178,189 169,109,115 82,105,140 128,128,128 189,186,189
 
Prefix 0-13!0-
TextChan 13[11<cmode>15<nick>13] 15<text>
TextChanSelf 13[11<cmode>0<me>13] 15<text>
ActionChan 13* 15<nick> <text>
ActionChanSelf 13* 15<me> <text>
FontDefault Lucida Console,11
FontChan Lucida Console,11
FontQuery Lucida Console,11
Colors 01,14,04,11,11,11,03,03,03,03,03,15,06,07,06,15,03,03,03,05,15,01,14,01,00,15
TextQuery 13[15<nick>13] 15<text>
TextQuerySelf 13[15<me>13] 15<text>
ActionQuery 13* 15<nick> <text>
ActionQuerySelf 13* 15<me> <text>
Mode 12== 15mode/13<chan> 15[<modes>] by 0<nick>
ModeUser 12== 15mode/13<chan> 15[<modes>] by 0<nick>
Join 12== 0<nick> <address> 15has joined 13<chan>
JoinSelf 12== 0You 15have joined 13<chan>
Part 12== 0<nick> <address> 15 has left 13<chan> <text>
Kick 12== 0<knick> 15was kicked from 13<chan> by <nick> [<text>]
Nick 12== 0<nick>15 is now known as 0<newnick>
KickSelf 12== 0You 15were kicked from 13<chan> by <nick> [<text>]
Wallop 13!<nick>! <text>
RAW.311 !Script slug.startwhois %::nick %::address %::realname
RAW.319 !Script slug.channels %::chan
RAW.301 !Script slug.away %::text
RAW.312 !Script slug.server %::wserver %::serverinfo
RAW.313 !Script slug.oper %::isoper
RAW.317 !Script slug.idle %::idletime %::signontime
RAW.318 12==15 End of WHOIS
RAW.330 !Script slug.authed %::text
Notice 0-13<nick>0-15 <text>
NoticeSelf 0-> -13<nick>0-15 <text>
NoticeSelfChan 0-> -13<chan>0-15 <text>
NoticeChan 0-13<nick>0-13[15<target>13]15 <text>
Quit 12==0 <nick> 15[0<address>15] has quit [0<text>15]
Topic 12==0 <nick> 15has changed the topic of 13<chan>15 to: <text>
Load !Script slug.load
Description Based on loads of IRSSI themes.
RAW.332 12==15 Topic for 13<chan>15: <text>
RAW.333 12==15 Topic set by 0<nick> 15[0<text>15]
CLineMe 00
CLineRegular 15
CLineOp 13
CLineVoice 11
RAW.324 12==15 Modes for 13<chan>15 [0<modes>15]
RAW.329 !Script slug.chancreated %::chan %::text
CtcpReplySelf !Script return
CTCP 12==0 <nick> 15requested CTCP 13<ctcp>15 <text>
CtcpChan 12==0 <nick> 15requested CTCP [0<chan>15] 13<ctcp>15 <text>
CtcpSelf 0ctcp -> -13<nick>0-15 <ctcp> <text>
CtcpChanSelf 0ctcp -> -13<chan>0-15 <ctcp> <text>
CtcpReply 0ctcpreply <- -13<nick>0-15 <ctcp> <text>
Rejoin <pre> 11Attempting to rejoin...