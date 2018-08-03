import FunnelPyramidBasePoint from'./funnelpyramidbase-point';import{BLANK,preDefStr}from'../lib/lib';var UNDEF,POINTER='pointer',POSITION_START=preDefStr.POSITION_START,POSITION_END=preDefStr.POSITION_END,POSITION_MIDDLE=preDefStr.POSITION_MIDDLE,textHAlign={right:POSITION_END,left:POSITION_START,middle:POSITION_MIDDLE,start:POSITION_START,end:POSITION_END,center:POSITION_MIDDLE,undefined:BLANK,BLANK:BLANK};class FunnelPoint extends FunnelPyramidBasePoint{configure(a={}){for(var b in a)this[b]=a[b];this.upperRadiusFactor=1}getType(){return'data'}getName(){return'funnelpoint'}getModifiedCurrentValue(){return UNDEF}getRatioK(a,b,c,d,e){var f=this,g=a.config,h=!g.streamLinedData,i=g.useSameSlantAngle;return h?.2+c*d:f.y?i?f.y/e:Math.sqrt(f.y/e):1}getLowestRadiusFactor(a,b){var c=this,d=a.config,e=!d.streamLinedData,f=d.useSameSlantAngle;return e?.2:c.y?f?c.y/b:Math.sqrt(c.y/b):1}allocatePosition(){}drawPlots(){var a,b,c,d,e,f,g,h,i,j,k=this,l=k.index,m=k.getLinkedParent(),n=m.getFromEnv('toolTipController'),o=m.config,p=k.y,q=k.displayValue,r=o.isSliced,s=k.labelAline,t=k.appliedStyle,u=k.style,v=m.getFromEnv('chart'),w=v.getChildContainer('trackerGroup'),x=k.plot,y=!!k.link,z=o.distanceAvailed,A=m.config.labelDrawingConfig,B=m.getFromEnv('animationManager'),C={};return(a=r?1:k.isSliced,h=t&&t.color||u&&u.color||m._chartLevelAttr.color,j={text:q,direction:BLANK,cursor:y?POINTER:BLANK,x:0,y:0,fill:h,"text-anchor":textHAlign[s]},null===p||p===UNDEF||!k.shapeArgs)?void(A[l]=i={args:j,css:t,point:k}):(c=k.getGraphicalElement('graphic'),d=k.getGraphicalElement('trackerObj'),e=f={},k.hoverEffects&&(e={color:k.rawColor,opacity:k.rawAlpha,"stroke-width":k.borderWidth,stroke:k.borderColor},g=k.rolloverProperties,f={color:g.color,opacity:g.alpha,"stroke-width":g.borderWidth,stroke:g.borderColor}),x?(k.shapeArgs.graphics=c,c=m.pyramidFunnelShape(k.shapeArgs),k.addGraphicalElement('graphic',c),c=B.setAnimation({el:c,attr:{fill:k.color,"stroke-width":k.borderWidth,stroke:k.borderColor},component:m}),k.addGraphicalElement('graphic',c),c.show(),A[l]=i={args:j,css:t,point:k}):(k.shapeArgs.graphics=x,k.plot=x={},c=m.pyramidFunnelShape(k.shapeArgs).attr({fill:k.color,"stroke-width":k.borderWidth,stroke:k.borderColor}),d=B.setAnimation({el:'path',container:w,component:m}).click(m.plotMouseUp,C).hover(m.rolloverResponseSetter(c,f),m.rolloutResponseSetter(c,e)),k.addGraphicalElement('graphic',c),k.addGraphicalElement('trackerObj',d),A[l]=i={args:j,css:t,point:k}),o.showTooltip?n.enableToolTip(d,k.toolText):n.disableToolTip(d),x.value=p,x.displayValue=q,x.sliced=!!a,x.cursor=y?POINTER:BLANK,x.x=k.x,x.index=l,C.datasetStore=m,C.plotItem=x,d.unclick(m.slice),k.doNotSlice||d.click(m.slice,C),i.context=C,i.actions={click:m.slice,hover:[m.rolloverResponseSetter(c,f),m.rolloutResponseSetter(c,e)]},x.dy=0,o.noOfGap?(z&&(x._startTranslateY=b='t0,'+z,x.dy=x.distanceAvailed=z),o.slicingGapPosition[k.x]&&(o.distanceAvailed-=o.perGapDistance)):x._startTranslateY=b='t0,0',B.setAnimation({el:c,attr:{transform:b},component:m}),i.transform=b,x)}}export default FunnelPoint;