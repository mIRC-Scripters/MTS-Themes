[mts]
NAME Zone.mts
AUTHOR slushey
EMAIL slushey@slushey.net
Website www.slushey.net
Description So simple it hurts. Available in White (Default) and Black (Black Zone.mts Scheme 1).
Version 1.0
MTSVersion 1.1
Prefix (Script)>
ParenText (<text>)
Timestamp on
Timestampformat [h:nntt]
Error (Error)> <text>
LOAD (Script)> Zone.mts theme loaded...
UNLOAD (Script)> Zone.mts theme unloaded...
FontDefault Verdana, 12
FontChan Verdana, 12
FontQuery Verdana, 12
CLineOwner 1
CLineOP 1
CLineHOP 1
CLineVoice 1
CLineRegular 1
CLineMe 1
CLineFriend 1
CLineEnemy 1
CLineIrcOP 1
Colors 0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0
RGBcolors 255,255,255 0,0,0 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
TextChan <nick><gt> <text>
TextChanSelf <me><gt> <text>
ActionChan <nick><gt> <-- <text>
ActionChanSelf <me><gt> <-- <text>
NoticeChan <nick>(NOT)<chan><gt> <text>
Notice <nick>(NOT)<gt> <text>
NoticeSelf NOT:<nick><gt> <text>
NoticeSelfChan NOT:<nick><gt> <text>
TextQuery <nick><gt> <text>
TextQuerySelf <me><gt> <text>
ActionQuery <nick><gt> <-- <text>
ActionQuerySelf <me><gt> <-- <text>
TextMsgSelf MSG:<nick><gt> <text>
Mode (Mode)<gt> <nick> set modes: <modes>
ModeUser (Mode)<gt> <nick> sets modes: <modes>
Join (Enter)<gt> <nick> <address>
JoinSelf (Enter)<gt> <me> to <chan>...
Part (Exit)<gt> <nick> <address> PART <parentext>
Kick (Exit)<gt> <nick> BOOTED <knick> <parentext>
KickSelf (Exit)<gt> <nick> BOOTED <nick> (YOU) <parentext>
Quit (Exit)<gt> <nick> QUIT <parentext>
Topic (Topic)<gt> <nick> changed topic... <text>
Nick (Nick)<gt> <nick> --> <newnick>
NickSelf (Nick)<gt> <nick> (YOU) --> <newnick>
Invite (Invite)<gt> <nick> invite you for join <chan>
ServerError (Error)<gt> <text>
Rejoin !script halt
Ctcp CTCP:<nick><gt> <ctcp>
CtcpChan CTCP:<nick><gt> <ctcp>
CtcpSelf CTCPTO:<nick><gt> <ctcp>
CtcpChanSelf CTCPTO:<nick><gt> <ctcp>
CtcpReply CTCPREPLY:<nick><gt> <ctcp> REPLIED <text>
NoticeServer (Server)<gt> <text>
Notify (Signon)<gt> <nick> is online...
UNotify (Signoff)<gt> <nick> is offline...
DNS (DNS)<gt> <address>... waiting for reply...
DNSError (DNS)<gt> Can't resolve <raddress>
DNSResolve (DNS)<gt> Resolved <address> to <raddress>
Echo <text>
EchoTarget <text>
Raw.311 (Whois)<gt> <nick> :: <address> :: <realname>
Raw.312 (Whois)<gt> <nick> :: <wserver> (<serverinfo>)
Raw.317 (Whois)<gt> <nick> :: idle <idletime>
Raw.Other <gt><gt> <text>   
Scheme1 Black Zone.mts
[Scheme1]
Colors 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1
CLineOwner 0
CLineOP 0
CLineHOP 0
CLineVoice 0
CLineRegular 0
CLineMe 0
CLineFriend 0
CLineEnemy 0
CLineIrcOP 0