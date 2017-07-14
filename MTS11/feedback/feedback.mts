[mts]
Name FeedbacK
Author Mal-Functi
Website http:\\www.feedbackscript.cjb.net
Email jpedrobc@clix.pt
Description Default theme from FeedbacK
Version 0.99
MTSVersion 1.1

Load !script ::load.feedback.0.99
Unload !script ::unload.feedback.0.99
Script feedback.mrc

FontDefault Verdana, 10
FontChan Verdana, 10
FontQuery Verdana, 10

Prefix <c1>(4$<c1>)
Timestamp ON
TimestampFormat (HH:nn)
ParenText <c2>(2<text><c2>)

Echo <pre> <text>
EchoTarget <pre> [<target>] <text>
Error 4[Error4] <text>
ServerError 4[ServerError4] <text>

Join <pre> <c1>[Join <chan>: <c2><nick> 10(<address>)]
JoinSelf <pre> Now talking in <chan>
Rejoin <pre> Rejoining <chan>...
Part <pre> <c1>[Part <chan>: <c2><nick> <c1>(<address>)] <parentext>
Nick <pre> <c4>[Nick change - (<nick> to <newnick>)]
NickSelf <pre> <c4>[My nick change - (<nick> to <newnick>)]
Quit <pre> <c1>[Quit: <nick> (<address>) <parentext>
Topic <pre> <c2><nick> <c1>sets topic: 1<text>
Kick <pre> <c2><knick><c1> was kicked from <chan> by <c2><nick> <parentext>
KickSelf <pre> <c2><nick> <c1>kicked you from <c2><chan> <parentext>
Invite <pre> You´ve been invited to <chan> by <nick>

Notify [3Notify] <c2><nick> <c1>(<address>) <parentext> <c1>is on irc.
UNotify [4UNotify] <c2><nick> <parentext> <c1>has left irc.

TextChan <lt><cmode><nick><gt> <text>
TextChanSelf <c3><lt><cmode><nick><c3><gt> <text>
TextQuery <lt><nick><gt> <text>
TextQuerySelf <c3><lt><nick><c3><gt> <text>
TextMsgSend <c1>-> <c2><nick> <c1>- <text>

ActionQuery 13* <nick> <text>
ActionQuerySelf 6* <nick> <text>
ActionChan 13* <cmode><nick> <text>
ActionChanSelf 6* <cmode><nick> <text>

Mode <pre> <c1><nick> sets mode: <c2><modes>
ModeUser <pre> <c1><nick> sets mode: <c2><modes>

Notice <pre> <c1>Notice / <c2><nick> - <c1><text> 
NoticeChan <pre> <c1>Notice - <c2><cmode><nick> : <target> - <c1><text>
NoticeSend <pre> <c1>-> -<c2><nick><c1>- <text>
NoticeServer <pre> <c1>SNotice / <c2><nick> - <c1><text>

Ctcp <pre> <c1>[<c2><nick><c1>] <c1><ctcp> <text>
CtcpChan <pre> <c1>[<c2><cmode><nick><c1>/<c2><chan><c1>] <c1><ctcp> <text>
CtcpReply <pre> <c1>[ <c2><nick> <c2><chan><c1>] <c1><ctcp> reply: <text>
CtcpSend <pre> <c1>Sended CTCP (<ctcp>): <c2><nick> <c2><text>
CtcpChanSend <pre> <c1>Sended channel CTCP (<ctcp>): <c2><chan> <c1><text>
CtcpReplySend <pre> <c1>[ <c2><nick> <c1>] <c1>Sending CTCP reply to <nick> (<ctcp>): <text>

Whois !Script ::whois.perform.feedback.0.99
Whowas !Script ::whowas.perform.feedback0.99

RAW.001 <pre> <text>
RAW.002 <pre> Host: <server> running version <value>
RAW.003 <pre> Server created on: <value>
RAW.004 <pre> Host server: <server> running version <value> - Usermodes: <users> Channelmodes: <text>
RAW.005 <pre> Protocols suported by server: <value>
RAW.221 <pre> My current usermodes: <modes>
RAW.250 <pre>Total connection(s): <value>
RAW.251 <pre> Total users: <users> (Invisible: <text>) on <value> servers.
RAW.252 <pre> IRCops on-line: <value>
RAW.253 <pre> Unknown connections: <value>
RAW.254 <pre> Channels formed: <value>
RAW.255 <pre> I have <users> clients and <value> servers.
RAW.265 <pre> Current local users: <users> (Max: <value>)
RAW.266 <pre> Current global users: <users> (Max: <value>)
RAW.302 !Script ::userhost.perform.feedback.0.99
RAW.332 <pre> 10Topic(7<chan>10): <text>
RAW.333 <pre> 10Topic set by  7<nick> 10on7 <text> 
RAW.353 10Names(7<chan>10): <text>

DNS <pre> <c1>Looking up <c2><nick><address><c1>...
DNSError <pre> <c1>Unable to resolve <c2><address><nick>
DNSResolve <pre> <c1>Resolved <c2><address> <c1>to <c2><raddress>

BaseColors 10,07,04,06
Colors 0,1,1,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1

ClineVoice 6
ClineFriend 2
ClineEnemy 3
ClineIRCop 4
CLineOwner 6
CLineOP 6
CLineHOP 6
CLineVoice 14
CLineRegular 10
CLineMe 2

ImageMirc tile main.bmp

Scheme1 Black background
Scheme2 No timestamp (black)
Scheme3 No timestamp (white)

[Scheme1]
Colors 1,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1
CLineMe 12
ClineFriend 12
ParenText <c2>(11<text><c2>)

[Scheme2]
Colors 1,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1
CLineMe 12
ClineFriend 12
ParenText <c2>(11<text><c2>)
TimeStamp OFF

[Scheme3]
TimeStamp OFF
