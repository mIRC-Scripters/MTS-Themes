menu channel {
  Everywherechat
  .Memos
  ..Check:/msg services memo $me check
..-
  ..Send:/msg services memo $?="Enter Nickname to Send to" add $?="Enter Memo Message" 
..-  
..Read:/msg services memo $me Read $?="Enter Number of Memo u Want to Read"
..-  
..Delete:/msg services memo $me DELETE $?="Enter Number of Memo u Want Deleted"
  .-
  .Register Channel:/msg services register # $?="Enter a Channel Password"
  .- 
  .Register Nickname:/msg services register $me $?="Enter a Nickname Password"
  .- 
  .Op Stuff
  ..Sop
  ...add:/msg services sop # add $?="Enter New Sop"
  ...-  
  ...delete:/msg services sop # del $?="Enter Sop To Delete"
  ...-  
  ...set pass:/msg services set # soppass $?="Enter new sop pass"
  ..-
  ..Aop
  ...add:/msg services aop # add $?="Enter New aop"
  ...-
  ...delete:/msg services aop # del $?="Enter aop To Delete"
  ...-  
  ...set pass:/msg services set # aoppass $?="Enter new aop pass"
  ..-  
  ..Vop
  ...add:/msg services vop # add $?="Enter New vop"
  ...-
  ...delete:/msg services vop # del $?="Enter vop To Delete"
  ..-  
  ..List Ops:/msg services list #
  .-
  .Rest Channel:/msg services reset $?="Enter Channel Name to Rest"
  .-
}
