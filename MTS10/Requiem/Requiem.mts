[mts]
Name            Requiem
Author          rew@efnet
Email           thedude@mediafringe.com
Description     simple theme which includes nick alignment, pretty colors and a few schemes
Version	        0.7a
MTSVersion      1.0
Script          requiem.mrc

Colors 1,2,2,4,3,3,2,2,2,2,2,3,2,2,4,2,2,2,2,2,3,1,3,1,4
RGBColors 255,255,255 0,0,0 98,106,140 197,212,255 255,255,255 128,124,128 208,204,208 0,0,0 0,0,0 0,0,0 0,0,0 0,0,0 0,0,0 0,0,0 0,0,0 0,0,0

BaseColors 02,03,04,01

Prefix          05:2:3:
TimeStamp       05(02 h:nntt05 )<c2>;
ParenText       <c1>(<c2><text><c1>)

CLineOwner      0
CLineOP         2
CLineHOP        2
CLineVoice      3
CLineRegular    4
CLineMe         3
ClineCharOwner  0.
ClineCharOP     0@
ClineCharHOP    0%
ClineCharVoice  0+

FontDefault     bright,9
FontChan        bright,9
FontQuery       bright,9



Load            <pre> <c3>requiem<c1> theme loaded. By rew
Unload          <pre> <c3>requiem<c1> theme unloaded. By rew

Mode            <pre> <c1>mode: <c1>(<c3><modes><c1>) <c2>by:<c3> <nick>
UserMode        <pre> <c1>usermode:<c3> <nick> <c2>changed modes to:<c3> <modes>

Join            <pre> <c1>join:<c3> <nick> <c1>(<c3><address><c1>)
JoinSelf        <pre> <c2>welcome to<c3> <chan>

Part            <pre> <c1>part:<c3> <nick> <c1>(<c3><address><c1>) <parentext>

Kick            <pre> <c1>kick: <c3><knick><c2> was kicked by<c3> <nick> <parentext>
KickSelf        <pre> <c3>you<c2> were kicked by<c3> <nick><c2>, from<c3> <chan> <parentext>

Quit            <pre> <c1>quit:<c3> <nick> <c1>(<c3><address><c1>) <parentext>

Topic           <pre> <c1>topic change:<c3> <nick> <c2>changes <c3><chan><c2>'s topic to:<c3> <text>

Nick            <pre> <c1>nick change:<c3> <nick> <c2>changed to<c3> <newnick>
NickSelf        <pre> <c1>info: <c3>You<c2> changed to<c3> <newnick>

Invite          <pre> <c1>info:<c3> <nick> <c2>has invited you to join<c3> <chan>

ServerError     <pre> <c1>error:<c3> <text>

Notice          <pre> <c1>info:<c2> <c2>notice was received from<c3> <nick> : <c1><c3><text><c1>
NoticeSelf      <pre> <c1>info:<c2> <c2>notice was sent to<c3> <nick> : <c1><c3><text><c1>

Rejoin          <pre> <c1>rejoining <c3><chan><c1>...

TextChanSelf     !script %:echo  $+ %::c2 $+ [ $+ %::c3 $+ $requiem_align_l(10,%::cmode $+  $+ %::c2 $+ %::me) $+  $+ %::c2 $+ ]]  $+ %::c3 $+ %::text
TextChan         !script %:echo  $+ %::c3 $+ [ $+ %::c2 $+ $requiem_align_l(10,%::cmode $+  $+ %::c3 $+ %::nick) $+  $+ %::c3 $+ ]]  $+ %::c2 $+ %::text
ActionChan       <c2>*<c3><cmode><nick> <text>
ActionChanSelf   <c2>*<c3><cmode><me> <text>

DNS             <pre> <c1>dns resolving: <c2> looking up <c3><address>...
DNSError        <pre> <c1>dns resolving: <c2>unable to resolve <c3><address>
DNSResolve      <pre> <c1>dns resolving: <c2>resolved <c3><address> <c2>to<c3> <raddress>

TextQuery       !script %:echo  $+ %::c3 $+ [ $+ %::c2 $+ $requiem_align_l(10, $+ %::c3 $+ %::nick) $+  $+ %::c3 $+ ]]  $+ %::c2 $+ %::text
ActionQuery     <pre> <c1>action:<c2> *<c3><nick> <text>
TextMsg         <pre> <c2>msg was received from<c3> <nick> : <c1>(<c3><text><c1>
TextQuerySelf   !script %:echo  $+ %::c2 $+ [ $+ %::c3 $+ $requiem_align_l(10, $+ %::c2 $+ %::me) $+  $+ %::c2 $+ ]]  $+ %::c3 $+ %::text
ActionQuerySelf <pre> <c1>action:<c2> *<c3><me> <text>
TextMsgSelf     <pre> msg was sent to<c3> <target> : <c3><text><c1><c2>

CTCP            <pre> <c1>(<c3><nick><c1>) ctcp<c3> <ctcp> <text>
CTCPChan        <pre> <c1>(<c3><nick><c1>-<c3><chan><c1>) ctcp<c3> <ctcp> <text>
CTCPReply       <pre> <c1>(<c3><nick><c1>-<c3><chan><c1>) ctcp <c2>reply<c3> <ctcp> <text> 
CTCPSelf        <pre> <c1>(<c3><nick><c1>) ctcp<c3> <ctcp> <text> 
CTCPChanSelf    <pre> <c1>(<c3><nick><c1>-<c3><chan><c1>) ctcp<c3> <ctcp> <text> 
CTCPReplySelf   <pre> <c1>(<c3><nick><c1>)<c1> ctcp <c2>reply<c3> <ctcp> <parentext> 

ListBegin       ┌──────────────02────────────────05────────────────────────────────────────────────────
ListText        │ <text>
ListSep         ├────02────────05──────────────────────────────
ListEnd         └─────────02──────────────────05────────────────────────────────────────────────

Echo            <timestamp> <pre> <c2> <text>
EchoTarget      <timestamp> <pre> <c1>(<c2><target><c1>)<c2> <text>
Error           <timestamp> <pre> Error:<c3> <text>


RAW.001         <pre> <c3><text>
RAW.002         <pre> <c1>host: <c3><server><c2> running version<c3> <value>
RAW.003         <pre> server created on:<c3> <value>
RAW.005         <pre> protocols supported by this server:<c3> <text>
RAW.250         <pre> total connection(s):<c3> <value>
RAW.251         <pre> users: <c3><users> <c2>invisible:<c3> <text> <c2>servers:<c3> <value>
RAW.252         <pre> operator(s) online:<c3> <value>
RAW.253         <pre> unknown connection(s):<c3> <value>
RAW.254         <pre> number of channels formed: <c3><value>
RAW.255         <pre> local clients: <c3><users> <c2>on<c3> <value><c2> server(s)
RAW.265         <pre> local users: <c3><users> <c2>max: <c3><value>
RAW.266         <pre> global users: <c3><users> <c2>max:<c3> <value>
RAW.302         <pre> userhost:<c3> <nick> <c1>(<c3><address><c1>)
RAW.311         !Script requiem.whois
RAW.319         !Script requiem.chans 
RAW.318         └─────────02──────────────────05────────────────────────────────────────────────
RAW.312         <c2>│ <c1>server:<c3> <wserver> <c2>(<c3><serverinfo><c2>)
RAW.301         <c2>│ <c1>away:<c3> <text>
RAW.307         <c2>│ <c1>registered nick:<c3> <isregd>
RAW.313         <c2>│ <c1>IRCop:<c3> <isoper> ; <operline> 
RAW.317         !Script requiem.idle 
RAW.315         <pre> end of <c3>/who<c2> list for <chan>
RAW.324         <pre> <c1><chan> modes:<c3> <modes>
raw.329         !script %:echo %::pre 02 $+ %::chan created on:4 $asctime(%::text)
RAW.332         <pre> <c1><chan> topic:<c1> "<c3><text><c1>"
RAW.333         <pre> <c1>set by:<c3> <nick><c2> on<c3> <text>
RAW.341         <pre> <c3><nick><c2> has been invited to join <c3><chan>
RAW.352         <pre> <c3><cmode><nick> <c1>(<c3><address><c1>)<c3> <realname>
RAW.353         <pre> <c1><chan>:<c3> <text>
RAW.366         <pre> end of <c3>/names<c2> list for <chan>
RAW.375         <pre> Message of the day:
RAW.372         <c3> <text>
RAW.376         <pre> end of <c3>/motd<c2> command.
RAW.391         <pre> date: <c3><value><c2>
RAW.401         <pre> no such nickname: <c3><nick>
RAW.403         <pre> no such channel: <c3><chan>
RAW.404         <pre> unable to send message to <c3><chan>
RAW.421         <pre> invalid command: <c3><value>
RAW.433         <pre> <c3><nick><c2> is already in use. Try [<nick>]
RAW.471         <pre> can't join <chan> (its full +l)
RAW.473         <pre> can't join <chan> (its invite only +i)
RAW.474         <pre> can't join <chan> (you're banned +b)
RAW.475         <pre> can't join <chan> (requires key +k)
RAW.482         <pre> you're not operator on <chan>


RAW.Other       <pre> <text>

Scheme1 Organic
Scheme2 Funk
Scheme3 Cloud
Scheme4 Plasma

[scheme1]
RGBColors 255,255,255 0,0,0 0,160,70 70,255,150 255,255,255 128,124,128 208,204,208 0,0,0 0,0,0 0,0,0 0,0,0 0,0,0 0,0,0 0,0,0 0,0,0 0,0,0
Timestamp  03h02.03nnt02..

[scheme2]
RGBColors 255,255,255 0,0,0 140,0,170 220,55,255 255,255,255 128,124,128 208,204,208 0,0,0 0,0,0 0,0,0 0,0,0 0,0,0 0,0,0 0,0,0 0,0,0 0,0,0
Timestamp 06[02h:nntt06]<c2>;

[scheme3]
RGBColors 255,255,255 0,0,0 92,90,92 208,204,208 255,255,255 128,124,128 208,204,208 0,0,0 0,0,0 0,0,0 0,0,0 0,0,0 0,0,0 0,0,0 0,0,0 0,0,0
Timestamp 02[03h00:nntt02]00;

[scheme4]
RGBColors 255,255,255 0,0,0 241,84,84 214,3,9 255,255,255 128,124,128 208,204,208 0,0,0 0,0,0 0,0,0 0,0,0 0,0,0 0,0,0 0,0,0 0,0,0 0,0,0
Timestamp  02h03.02nnt03..

