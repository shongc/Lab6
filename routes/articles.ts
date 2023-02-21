import Router, {RouterContext} from "koa-router";
import bodyParser from "koa-bodyparser";

const articles = [
  {title: 'hello article', fullText:'some text here to fill the body'},
  {title: 'another article', fullText:'again here is some text here to fill the body'},
  {title: 'conventry university', fullText:'some news about conventry university'},
  {title: 'smart campus', fullText:'smart campus hahaha ?.?'}
]

const router = new Router({prefix:'/api/v1/articles'});

const getAll = async(ctx:RouterContext, next:any)=>{
  ctx.body = articles;
  await next();
};
const getById = async(ctx:RouterContext, next:any)=>{};
const createArticle = async(ctx:RouterContext, next:any)=>{};
const updateArticle = async(ctx:RouterContext, next:any)=>{};
const deleteArticle = async(ctx:RouterContext, next:any)=>{};

router.get('/',getAll);
router.post('/',bodyParser(),createArticle);
router.get('/:id([0-9]{1,})',getById);
router.put('/:id([0-9]{1,})',updateArticle);
router.del('/:id([0-9]{1,})',deleteArticle);

export {router};
