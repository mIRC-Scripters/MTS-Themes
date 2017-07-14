[mts]
Name LiCe
Author Sharper
Email sharper@irc.pl
Description LiCe theme by Sharper (my first MTS theme ;))
Website http://maniana.za.pl/
MTSVersion 1.1
Version 1.0
Script lice.mrc

Colors 1,12,12,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,1,11,1,11,15
RGBColors 255,255,255 0,0,0 0,0,128 26,166,26 208,32,32 111,19,19 133,24,134 255,140,0 247,228,17 189,183,107 126,139,154 189,200,211 123,155,185 124,137,150 128,128,128 208,208,208
BaseColors 14,14,15,00

CLineOwner 15 
CLineOP 15
CLineHOP 15
CLineVoice 15
CLineRegular 15
CLineMe 14
CLineFriend 08
CLineEnemy 04
CLineIrcOP 11

CLineCharOwner     14.
CLineCharOP        14@
CLineCharHOP       14%
CLineCharVoice     14+
CLineCharRegular

FontDefault Courier New,13
FontChan Courier New,13
FontQuery Courier New,13

Prefix <c2>[<c4>÷<c2>]
ParenText <c2>[<c4><text><c2>]
Timestamp ON
TimestampFormat <c2>[<c3>HH:nn:ss<c2>]

ImageButtons licebut.bmp
ImageStatus photo lice.png
ImageChan photo lice.png
ImageToolbar fill top.bmp
ImageSwitchbar fill top.bmp

; Text Events
TextChan <c2><cmode><c3><nick><c2> >> <c3><text>
TextChanSelf <c2><cmode><c3><me><c2> >> <c3><text>
TextQuery <c4><nick>!<address><c2> << <c3><text>
TextQuerySelf <c4><nick><c2> >> <c3><text>
TextMsg <c2>[m] <c4><nick>!<address><c2> << <c3><text>
TextMsgSelf <c2>[m] <c4><nick><c2> >> <c3><text>
ActionChan <c3>* <c4><cmode><nick> <c3><text>
ActionChanSelf <c3>* <c4><cmode><me> <c3><text>
ActionQuery <c3>* <c4><nick> <c3><text>
ActionQuerySelf <c3>* <c4><me> <c3><text>
NoticeChan <c2>[not][<c4><cmode><nick><c2>(<c3><target><c2>)] <c3><text>
Notice <c2>[not][<c4><nick><c2>(<c3><address><c2>)] <c3><text>
NoticeSelf <c2>[not] ><c4><nick> <c3><text>
NoticeSelfChan <c2>[not] ><c4><target> <c3><text>

; Basic Events
Mode !Script %:echo %::pre  $+ %::c1 $+ [mode]  $+ %::c3 $+ %::chan  $+ %::c4 $+ %::modes  $+ %::c3 $+ (by %::nick $+ ! $+ %::address $+ ) %:comments
ModeUser <pre> <c1>[mode] <c3> User mode change <c2>[<c3><nick><c2>] <c4><modes><c3> on <c4><server>
Join <pre> <c2>[join] <c3><chan> <c4><nick> <c3>(<address>)
JoinSelf <pre> <c3>Now talking in <c4><chan> 
Part <pre> <c2>[part] <c3><chan> <c4><nick> <c3>(<address>) <parentext>
Kick <pre> <c2>[kick] <c4><knick> <c3>by <c4><nick> <c3>from <chan> <parentext>
KickSelf <pre> <c2>[kick] <c4>YOU <c3>by <c4><nick> <c3>from <chan> <parentext>
Quit <pre> <c2>[quit] <c4><nick> <c3>(<address>) <parentext> 
Topic <pre> <c4>topic<c2>.<c3>change<c2>.<c3>on<c2>.<c4><chan><c2>.<c3>by<c2>.<c4><nick><c3>: <text>
Nick <pre> <c4><nick> <c3>is now known as <c4><newnick>
NickSelf <pre> <c3>Your nick is now: <c4><newnick>
Invite <pre> <c4><nick> <c3>invites you to channel <c4><chan>
ServerError <pre> <c2>Error: 11<text>
Rejoin <pre> <c2>Attempting to rejoin...
Ctcp <pre> <c2>[<c4><nick>!<address><c2>]<c3> sends <c2>[<c4>CTCP <ctcp><c2>] <c3>to You <parentext>
CtcpChan <pre> <c2>[<c4><nick>!<address><c2>]<c3> sends <c2>[<c4>CTCP <ctcp><c2>] <c3>to everyone from <c4><chan> <c4><parentext>
CtcpSelf <pre> <c2>>[CTCP <ctcp>] <c3>to <c4><nick> <c3><parentext>
CtcpChanSelf <pre> <c2>>[CTCP <ctcp>] <c3>to <c4><chan> <c3><parentext>
CtcpReply <pre> <c4>Reply <c2>[CTCP <ctcp>] <c3>from <c4><nick> <c3><parentext>
CtcpReplySelf <pre> <c2>[CTCP <ctcp>] <c3>reply sent to <c4><nick> <c3><parentext>
Notify <pre> <c2>[on] <c3>Signon detected: <c4><nick> <c3>(<address>) <parentext>
UNotify <pre> <c2>[off] <c3>Signoff detected: <c4><nick> <c3>(<address>) <parentext>
Wallop <pre> <c2>[wallop] <c4>[<nick>] <c3><text>
NoticeServer <pre> <c2>[not] <c4><nick> <c3><text>

; Non-IRC Events
DNS <pre> <c2>[dns] <c3>lookup... <c4><nick><address> <c3><text>
DNSResolve !Script %:echo %::pre  $+ %::c2 $+ [dns] $+ %::c4 $iif(!%::nick,$iif(%::iaddress == %::raddress,%::naddress,%::iaddress),%::nick  $+ %::c2 $+ [ $+  $+ %::c4 $+ $iif(%::iaddress == %::raddress,%::naddress,%::iaddress) $+  $+ %::c2 $+ ]) $+  $+ %::c2 <=> $+ %::c4 %::raddress %:comments
DNSError !Script %:echo %::pre  $+ %::c2 $+ Cannot resolve $+ %::c4 $iif(!%::address,%::nick  $+ %::c2 $+ [ $+ %::c3 $+ no such user $+  $+ %::c2 $+ ],$iif(!%::nick,%::address,%::nick)) %:comments
Echo <pre> <c3><text>
EchoTarget <pre> <c3><text>
Error <pre> <c2>Error: <c3><text>

Load !Script lice.load
UnLoad !Script lice.unload

; Raw Events
raw.311 !Script whois.top
raw.319 !Script whois.chan
raw.301 !Script whois.gone
raw.317 !Script whois.idle
raw.313 !Script whois.ircop
raw.312 !Script whois.serv
raw.318 !Script whois.bottom
raw.314 !Script whowas.top
raw.369 !Script whowas.bottom
raw.401 <pre> <c4><nick>: No such nick
raw.403 <pre> <c4><chan>: No such channel
raw.404 <pre> <c4><chan>: Cannot send to channel
raw.406 <pre> <c4><nick>: There was no such nickname
raw.421 <pre> Unknown command: <c4><value>
raw.432 <pre> <c4><nick> is an erroneus nickname
raw.433 <pre> Nick <c4><nick> is already in use
raw.441 <pre> There is no <c4><nick> on <c4><chan>
raw.442 <pre> You are not on <c4><chan>
raw.443 <pre> <c4><nick> is already on <c4><chan>
raw.475 <pre> You can't join <c4><chan> [A valid key is required]
raw.471 <pre> You can't join <c4><chan> [Channel is full]
raw.473 <pre> You can't join <c4><chan> [An invite is required]
raw.474 <pre> You can't join <c4><chan> [Address is banned]
raw.481 <pre> You aren't <c4>iRC@ on <c4><server>
raw.482 <pre> <c4><chan> You don't have <c4>@ on that channel
raw.332 <pre> <c4>topic<c2>.<c3>on<c2>.<c4><chan><c3>: <text>
raw.333 <pre> <c4>topic<c2>.<c3>on<c2>.<c4><chan><c3>: Set by <nick> <parentext>
raw.324 !Script on.join
raw.352 <pre> <c4>[<cmode><away>] <nick>!<address> <c2>at <c4><wserver> (<realname>) 
raw.315 <pre> [status] n!u@h at server (realname entry) == END OF /WHO <chan> ==
raw.367 <pre> <c4><text>
raw.368 <pre> ------ End of 16<chan> ban list ------
raw.346 <pre> <c4><text>
raw.347 <pre> ------ End of 16<chan> invite list ------
raw.348 <pre> <c4><text>
raw.349 <pre> ------ End of 16<chan> exception list ------
raw.353 !Script lice.sc
raw.366 !Script lice.sc.end

ImageStatus photo lice.png
ImageChan photo lice.png
ImageToolbar fill top.bmp
ImageSwitchbar fill top.bmp




