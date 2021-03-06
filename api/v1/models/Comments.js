import pool from '../database/index';

export default class Comment {
  constructor(usercomment) {
    this.questionid = usercomment.questionid;
    this.title = usercomment.title;
    this.body = usercomment.body;
    this.comment = usercomment.comment;
    this.userid = usercomment.userid;
  }

  async createComment() {
    const queryString = `INSERT INTO comments (questionid, title, body, comment, userid)
    VALUES ($1, $2, $3, $4, $5) RETURNING *`;
    const values = [this.questionid, this.title, this.body, this.comment, this.userid];
    const { rows } = await pool.query(queryString, values);
    return rows[0];
  }

  static async getCommentsByQuestion(id) {
    const queryString = 'SELECT * FROM comments WHERE questionid = $1';
    const values = [id];
    const { rows } = await pool.query(queryString, values);
    return rows;
  }
}
