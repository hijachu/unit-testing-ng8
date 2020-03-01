import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;

  beforeEach(() => {
    // set up
    component = new VoteComponent();
  });

  afterEach(() => {
    // console.log('clean up / tear down');
  });

  beforeAll(() => {

  });

  afterAll(() => {

  });

  it('should increment totalVotes when upvotes', () => {
    component.upVote();

    expect(component.totalVotes).toBe(1);
  });

  it('should decrement totalVotes when downvotes', () => {
    component.downVote();

    expect(component.totalVotes).toBe(-1);
  });
});
